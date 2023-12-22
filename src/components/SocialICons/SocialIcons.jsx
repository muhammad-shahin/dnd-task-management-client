import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SocialIcons = () => {
  return (
    <div className='flex justify-center items-center gap-3'>
      <Link
        to='https://www.facebook.com/ShahinMuhammad2/'
        target='_blank'
      >
        <div className='rounded-full bg-blue-300 backdrop-blur-[25px] bg-opacity-[0.3] flex justify-center items-center gap-2 h-[36px] w-[36px] p-1'>
          <BsFacebook className='text-[22px] text-blue-600' />
        </div>
      </Link>
      <Link
        to='https://twitter.com/amishahin23'
        target='_blank'
      >
        <div className='rounded-full bg-blue-300 backdrop-blur-[25px] bg-opacity-[0.3] flex justify-center items-center gap-2 h-[36px] w-[36px] p-1'>
          <BsInstagram className='text-[22px] text-orange-600' />
        </div>
      </Link>
      <Link
        to='https://www.facebook.com/ShahinMuhammad2/'
        target='_blank'
      >
        <div className='rounded-full bg-blue-300 backdrop-blur-[25px] bg-opacity-[0.3] flex justify-center items-center gap-2 h-[36px] w-[36px] p-1'>
          <BsTwitter className='text-[22px] text-blue-400' />
        </div>
      </Link>
      <Link
        to='https://www.linkedin.com/in/shahin-muhammad/'
        target='_blank'
      >
        <div className='rounded-full bg-blue-300 backdrop-blur-[25px] bg-opacity-[0.3] flex justify-center items-center gap-2 h-[36px] w-[36px] p-1'>
          <BsLinkedin className='text-[22px] text-blue-500' />
        </div>
      </Link>
    </div>
  );
};

export default SocialIcons;
