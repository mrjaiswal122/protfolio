import Navbar from "../assets/Navbar"
import Page from "../assets/Page"
import Project from "../assets/Project"
function Home() {
  return (
  <>
      <header className="min-w-full sticky top-0 bg-[#0e1630]  h-[5.875rem] ">

      <div  className="   h-20 csw px-3 mx-auto">
        
      <Navbar />
 
      </div>
      </header>

      <Page/>
      <Project/>
  </>

  )
}

export default Home