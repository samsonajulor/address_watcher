import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Steps from './Steps';
import Chains from "./Chains";
// import Cta from "./Cta.tsx";
// import Footer from "./Footer.tsx";
// import Infos from "./Infos.tsx";

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="justify-center items-start bg-gray-950 flex flex-col">
        <Hero />
        <Features />
        <Steps />
        
        <Chains />
        {/* <Infos /> */}
        {/* <Cta /> */}
        {/* <Footer />  */}
      </div>
    </div>
  );
};

export default Landing;
