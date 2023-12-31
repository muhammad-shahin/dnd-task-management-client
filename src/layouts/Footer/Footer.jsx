import { Link } from 'react-router-dom';
import SocialIcons from '../../Components/SocialICons/SocialIcons';
import logo from '../../assets/logo/site-logo.png';

const Footer = () => {
  return (
    <footer className='container mx-auto px-[5%] lg:px-0'>
      <div className='flex justify-between flex-wrap gap-6 lg:gap-0 flex-col lg:flex-row'>
        {/* logo */}
        <div>
          <img
            src={logo}
            loading='lazy'
            className='w-[250px]'
          />
        </div>

        {/* Rate My Project Pages */}
        <div className='flex flex-col lg:justify-start justify-center gap-3'>
          <p className='font-semibold text-lg'>Site Maps</p>
          <Link className='font-medium text-slate-500'>Home</Link>
          <Link className='font-medium text-slate-500'>About</Link>
          <Link className='font-medium text-slate-500'>Contact</Link>
          <Link className='font-medium text-slate-500'>Create Task</Link>
          <Link className='font-medium text-slate-500'>My Todo List</Link>
        </div>

        {/* Stay Connected */}
        <div className='flex flex-col lg:justify-start justify-center gap-3'>
          <p className='font-semibold text-lg'>Stay Connected</p>
          <Link className='font-medium text-slate-500'>
            Latest News & Releases
          </Link>
          <Link className='font-medium text-slate-500'>FAQs & Rules</Link>
          <Link className='font-medium text-slate-500'>About Us</Link>
          <Link className='font-medium text-slate-500'>
            Our Tutors & Supporters
          </Link>
          <Link className='font-medium text-slate-500'>Jobs</Link>
        </div>

        {/* Legals Pages */}
        <div className='flex flex-col lg:justify-start justify-center gap-3'>
          <p className='font-semibold text-lg'>Legals Pages</p>
          <Link className='font-medium text-slate-500'>Privacy Policy</Link>
          <Link className='font-medium text-slate-500'>Terms & Condition</Link>
          <Link className='font-medium text-slate-500'>Cookies</Link>
          <Link className='font-medium text-slate-500'>Imprint</Link>
          <Link className='font-medium text-slate-500'>Data Usage</Link>
        </div>

        {/* Social Icons */}
        <div className='flex flex-col lg:justify-start justify-center gap-3'>
          <p className='font-semibold text-lg'>Follow Us On</p>
          <SocialIcons />
        </div>
      </div>
      <div className='text-center mt-8 pb-4'>
        <p className='text-gray-500 text-md'>
          &copy; Copyright 2021-2023{' '}
          <span className='text-blue-500'>DND TASK MANAGEMENT</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
