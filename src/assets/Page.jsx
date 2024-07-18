import { FaRegFilePdf } from "react-icons/fa6";
function Page() {
  return (
    <div className="bg-[--bg-color] ">

     <div className="hidden md:flex min-w-full pt-[3.75rem] ">

        <div id="flex" aria-label="Home"
             className=" csw px-3 mx-auto ">

        <div className="flex   ">

            {/* content */}
            <div className="flex-1">

            <div className="flex flex-col  ">

              <div className="cs-padding">

                <h2 className="text-[--site-theme-color] text-2xl z-0 relative  ml-10 dash cs-hello">Hello</h2>

                <h5 className="text-white my-4 text-[40px] cs-name">I&#39;m Ankush Jaiswal</h5>

                <h2 className="text-[--site-text] mb-6 cs-hello">Fullstack Developer &amp; Instructor</h2>

                <p className="">Hi there! My name is Ankush and I’m a software engineer with over 2
                   years of experience in the industry. I love all things about tech
                   and coding, and on my channel, I share my knowledge and experience
                   with others.</p>
              </div >
              {/* button */}
              <div>

              <a className="text-white text-lg font-medium mt-12 border border-white inline-flex gap-2 justify-center items-center w-[261.88px] h-[76px] rounded-lg" href="https://drive.google.com/file/d/1C1s4v_9NSg25iyslxsS9nMCbpligzZXw/view?usp=drivesdk" alt="resume">Resume

              <span><FaRegFilePdf /></span>

              </a>
              </div>

            </div>
            </div>

            {/* image */}
            <div className="flex-1 flex">
             <div className="mx-auto "></div>
            <div className="h-[250px] w-[250px] custom-dimension flex justify-end text-end">
              {/* <div className="mx-auto"></div> */}
                <img className="rounded-full" src="/sq.jpg" alt="Ankush jaiswal" />
            </div>

            </div>

        </div>


        </div>

     </div>


      <div id="md:hidden"
        aria-label="Home" 
        className=" min-h-screen lg:mx-24 px-3 sm:mx-12 md:mx-8 flex flex-col items-center justify-center md:hidden max-w-full pt-14 "
      >
        <div className="  bg-[--bg-color] inline-flex items-center justify-center flex-col ">
          {/* image */}
          <div className="mt-[50px]">

          <img
            className="rounded-full"
            style={{ height: "250px", width: "250px" }}
            src="/sq.jpg"
            alt="Ankush jaiswal"
          />
          </div>

          <h2 className="text-[white] relative my-4 text-2xl">
            <span className="text-[--site-theme-color] dash">Hello ! </span>I&#39;m
            Ankush Jaiswal
          </h2>

          <h5 className="mb-4 text-[--site-text] text-lg">
            Fullstack Developer &amp; Instructor
          </h5>

          <p id="about-me" className="text-center  text-base text-[--site-text]">
            Hi there! My name is Ankush and I’m a software engineer with over 2
            years of experience in the industry. I love all things about tech
            and coding, and on my channel, I share my knowledge and experience
            with others.
          </p>
          <div>

              <a className="text-white text-lg font-medium mt-12 border border-white inline-flex gap-2 justify-center items-center w-[220px] h-[68px] rounded-lg" href="https://drive.google.com/file/d/1C1s4v_9NSg25iyslxsS9nMCbpligzZXw/view?usp=drivesdk" alt="resume">Resume

              <span><FaRegFilePdf /></span>

              </a>
              </div>
        </div>

      </div>

    </div>
  );
}

export default Page;
