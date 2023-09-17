import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NavbarDesktop from "../components/NavbarDesktop";
import About from "../components/About";
import Services from "../components/Services";

function Main() {
  return (
    <>
      <Navbar />
      <NavbarDesktop />
      <Hero />
      <About />
      <Services />
    </>
  );
}

export default Main;
