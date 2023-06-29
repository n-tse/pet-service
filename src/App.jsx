import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import SiteMap from "./components/SiteMap";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Pricing />
      <Testimonials />
      <Faq />
      <SiteMap />
    </>
  );
}

export default App;
