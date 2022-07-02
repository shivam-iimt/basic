import Header from './common/header'
import PreLoader from './common/PreLoader'
import Features from './common/Features';
import Blog from './common/Blog';
import Footer from './common/Footer'
import Contact from './common/Contact';
import CounterUP from './common/CounterUP';
import Gallary from './common/Gallary';
import Teachers from './common/Teachers';
import Courses from './common/Courses';
import CallAction from './common/CallAction';
import BoxSection from './common/BoxSection';
import MainSlider from './common/MainSlider';
function App() {
  return (
    <div className="App">
      {/* <PreLoader/> */}
      <Header />
      {/* <MainSlider/> */}
      <BoxSection />
      <Features />
      <CallAction />
      <Courses />
      <Teachers />
      <Gallary />
      <CounterUP />
      <Blog />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
