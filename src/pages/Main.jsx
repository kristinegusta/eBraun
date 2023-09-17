import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NavbarDesktop from "../components/NavbarDesktop";
import About from "../components/About";

function Main() {
  return (
    <>
      <Navbar />
      <NavbarDesktop />
      <Hero />
      <About />
    </>
  );
}

export default Main;
