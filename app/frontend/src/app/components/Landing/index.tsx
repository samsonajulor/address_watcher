import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Steps from './Steps';
import Chains from './Chains';
import Infos from './Infos';
import Cta from './Cta';
import Footer from './Footer';

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="justify-center items-start bg-gray-950 flex flex-col">
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
