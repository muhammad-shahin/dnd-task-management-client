import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton';
import Lottie from 'lottie-react';
import bannerAnim from '../../assets/Animation/task-anim.json';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';
const Banner = () => {
  return (
    <section className='xl:px-[8%] xl:py-20 px-[5%] py-10 backdrop-blur-xl bg-opacity-[0.75] flex-bet relative gradient-bg'>
      {/* overlay */}
      {/* particles */}
      <div className='absolute top-0 left-0'>
        <ParticlesBackground />
      </div>
      {/* left side */}
      <div className='capitalize text-white space-y-6 relative'>
        <h1 className='font-semibold text-2xl w-full lg:text-6xl lg:max-w-3xl'>
          Unlock Your Academic Potential: Transform Your Study Experience with
          Collaborative Learning
        </h1>
        <p className='font-semibold lg:text-base text-sm lg:max-w-3xl text-slate-600'>
          Join our online group study community and experience a new way to
          excel in your studies. Collaborate with friends, create assignments,
          and achieve academic success, all in one place.
        </p>
        <div className='flexme'>
          <PrimaryButton text="Let's Explore" />
        </div>
      </div>

      {/* right side */}
      <div className='hidden lg:block relative'>
        <Lottie
          loop
          animationData={bannerAnim}
        />
      </div>
      <div className='overlay'></div>
    </section>
  );
};

export default Banner;
