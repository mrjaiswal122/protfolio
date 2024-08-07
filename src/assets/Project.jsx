import Cards from "./Cards"


function Project() {
  return (
    <>
    
    <section    className=" mt-[150px] bg-[--bg-color]  min-w-full">
      <div id="projects"   className="csw  mx-auto px-3 ">

        {/* title */}
        <div   className="flex flex-col mb-12 text-2xl text-white">
          <div    className="dash ml-10  mb-6 relative text-[--site-theme-color]">Projects</div>
          <div>Checkout My Projects</div>
        </div>
        {/* cards */}
        <div   className="flex flex-wrap"> 
          <Cards/>
        </div>

      </div>

    </section>
    </>
  )
}

export default Project