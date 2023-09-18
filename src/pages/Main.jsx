import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NavbarDesktop from "../components/NavbarDesktop";
import About from "../components/About";
import Services from "../components/Services";
import Qualifications from "../components/Qualifications";
import Reviews from "../components/Reviews";
import Form from "../components/FormSection";
import Footer from "../components/Footer";

function Main() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <NavbarDesktop />
      <Hero />
      <About />
      <Services />
      <Qualifications />
      <Reviews />
      <Form />
      <Footer />
    </>
  );
}

export default Main;
