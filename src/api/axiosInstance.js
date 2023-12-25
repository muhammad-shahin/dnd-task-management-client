import axios from 'axios';

const userData = JSON.parse(localStorage.getItem('userData'));

const axiosInstance = axios.create({
  baseURL: 'https://dnd-task-management-server.vercel.app',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add user UID as a query parameter to every request
    config.params = { ...config.params, userId: userData?.uid };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
