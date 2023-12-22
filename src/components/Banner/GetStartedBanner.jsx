import PropTypes from 'prop-types';
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const GetStartedBanner = ({ title = '', children }) => {
  return (
    <div className='w-full flex justify-center items-center flex-col gap-4 py-16 gradient-bg text-center gradient-anim px-[5%]'>
      <h3 className='lg:text-6xl text-4xl font-semibold text-white max-w-5xl'>
        {title}
      </h3>
      <Link to='/login'>
        <PrimaryButton text='Join Now' />
      </Link>
      {children}
    </div>
  );
};

GetStartedBanner.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default GetStartedBanner;
