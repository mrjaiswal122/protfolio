import Navbar from "../assets/Navbar";
import Page from "../assets/Page";
import Skills from "../assets/Skills";
import Project from "../assets/Project";
import Contact from "../assets/Contact";
import Footer from "../assets/Footer";
function Home() {
  return (
    <>
      <header   className="min-w-full sticky z-20 top-0 bg-[--bg-color]  h-[5.875rem]  ">
        <div   className="  bg-[--bg-color]   h-20 csw px-3 mx-auto ">
          <Navbar/>
        </div>
      </header>

      <Page />
      <Skills/>
      <Project />
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;
