/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import Swal from 'sweetalert2';
import useAxios from '../hooks/useAxios';
import { auth } from '../Configs/firebase.config';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  // const userData = JSON.parse(localStorage.getItem('userData'));
  const secureAxios = useAxios();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatedCartCount, setUpdatedCartCount] = useState(0);
  const googleProvider = new GoogleAuthProvider();

  // email & password sign up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login function
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign out function
  const logoutUser = async () => {
    return signOut(auth)
      .then(() => {
        localStorage.setItem('userData', null);
        secureAxios
          .post('/logout')
          .then((res) => {
            console.log('Logout success response: ', res.data);
          })
          .catch((error) => {
            console.log('Logout error response : ', error.response);
          });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Logout',
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `Failed To Logout. Please Try Again. ${error.message}`,
          showConfirmButton: false,
          timer: 3500,
        });
      });
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        localStorage.setItem('userData', JSON.stringify(currentUser));
      } else {
        setUser(null);
        setLoading(false);
        secureAxios
          .post('/logout')
          .then((res) => {
            console.log('Logout success response: ', res.data);
          })
          .catch((error) => {
            console.log('Logout error response : ', error.response);
          });
      }
    });
    return () => unsubscriber();
  }, []);

  // toggle profile on click
  const [showProfile, setShowProfile] = useState(false);

  const authInfo = {
    createUser,
    loginUser,
    signInWithGoogle,
    user,
    logoutUser,
    showProfile,
    setShowProfile,
    loading,
    setLoading,
    updatedCartCount,
    setUpdatedCartCount,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
