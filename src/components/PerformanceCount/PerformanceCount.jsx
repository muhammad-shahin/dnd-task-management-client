import CountAnimation from '../../shared/CountAnimation/CountAnimation';

const PerformanceCount = () => {
  return (
    <div className='flex-cen space-x-0'>
      <CountAnimation
        number={60}
        delay={2000}
        onScroll={false}
        afterText='K+'
        style='text-center gradient-text lg:text-6xl text-4xl font-bold lg:w-[180px] xl:w-[250px]'
      >
        <div>
          <p className='lg:text-lg text-[12px] text-center capitalize '>
            Student
          </p>
        </div>
      </CountAnimation>
      <CountAnimation
        number={4000}
        delay={1000}
        onScroll={false}
        afterText='+'
        style='text-center gradient-text lg:text-6xl text-4xl font-bold lg:w-[180px] xl:w-[250px]'
      >
        <div>
          <p className='lg:text-lg text-[12px] text-center capitalize'>
            softwere developers
          </p>
        </div>
      </CountAnimation>
      <CountAnimation
        number={1900}
        delay={1000}
        onScroll={false}
        afterText='+'
        style='text-center gradient-text lg:text-6xl text-4xl font-bold lg:w-[180px] xl:w-[250px]'
      >
        <div>
          <p className='lg:text-lg text-[12px] text-center capitalize '>
            Corporate Professionals
          </p>
        </div>
      </CountAnimation>
      <CountAnimation
        number={6000}
        delay={1000}
        onScroll={false}
        afterText='+'
        style='text-center gradient-text lg:text-6xl text-4xl font-bold lg:w-[180px] xl:w-[250px]'
      >
        <div>
          <p className='lg:text-lg text-[12px] text-center capitalize '>
            Bankers
          </p>
        </div>
      </CountAnimation>
      <CountAnimation
        number={2150}
        delay={2000}
        onScroll={false}
        afterText='+'
        style='text-center gradient-text lg:text-6xl text-4xl font-bold lg:w-[180px] xl:w-[250px]'
      >
        <div>
          <p className='lg:text-lg text-[12px] text-center capitalize '>
            Game Developers
          </p>
        </div>
      </CountAnimation>
    </div>
  );
};

export default PerformanceCount;
