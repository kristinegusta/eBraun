import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NavbarDesktop from "../components/NavbarDesktop";
import About from "../components/About";
import Services from "../components/Services";
import Qualifications from "../components/Qualifications";
import Reviews from "../components/Reviews";

function Main() {
  return (
    <>
      <Navbar />
      <NavbarDesktop />
      <Hero />
      <About />
      <Services />
      <Qualifications />
      <Reviews />
    </>
  );
}

export default Main;
