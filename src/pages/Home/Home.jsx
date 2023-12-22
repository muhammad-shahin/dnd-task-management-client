import Banner from '../../components/Banner/Banner';
import Heading from '../../shared/Heading/Heading';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import PerformanceCount from '../../components/PerformanceCount/PerformanceCount';
import CoreFeatures from '../../components/CoreFeatures/CoreFeatures';
import OverlapImage from '../../shared/OverlapImage/OverlapImage';
import Categories from '../../components/Categories/Categories';
import Faq from '../../components/FAQ/Faq';
import Footer from '../../layouts/Footer/Footer';
import GetStartedBanner from '../../components/Banner/GetStartedBanner';

const Home = () => {
  return (
    <div>
      <Banner />

      {/* How it works section */}
      <div className='lg:my-0 my-8'>
        <Heading title='How it Works?' />
        <HowItWorks />
      </div>

      {/* performance count section */}
      <div className='container mx-auto lg:my-28 my-8'>
        <Heading title='Who use our app?' />
        <PerformanceCount />
      </div>

      {/* features section */}
      <div className='container mx-auto lg:my-28 my-8'>
        <Heading title='Core Features' />
        <CoreFeatures />
      </div>

      {/* improve your section */}
      <div className='container mx-auto lg:my-28 my-8 lg:block hidden'>
        <OverlapImage />
      </div>

      {/* categories we have section */}
      {/* <div className='container mx-auto lg:my-28 my-8'>
        <Heading
          title='Category We Have'
          subTitle='Explore Assignment By Category'
        />
        <Categories />
      </div> */}

      {/* FAQ section */}
      <div className='container mx-auto lg:my-28 my-8'>
        <Heading title='Frequently Asked Question' />
        <Faq />
      </div>
      {/* FAQ section */}
      <div className='lg:my-28 my-8'>
        <GetStartedBanner title='What are you waiting for? Join the study team!' />
      </div>
      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Home;
