import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Steps from './components/Steps';
import Chains from './components/Chains';
import Infos from './components/Infos';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Mode from './components/Mode';

const Landing = () => {
  return (
    <div className="bg-cs-bg dark:bg-cs-dark-bg text-cs-dark-primary dark:text-cs-primary">
      <Header />
      <Mode />
      <div className="justify-center items-start flex flex-col">
        <Hero />
        <Features />
        <Steps />
        <Chains />
        <Infos />
        <Cta />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
