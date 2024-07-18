import { IoMenu } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaGears } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
function Navbar() {
  
  const hideMenu=()=>{
   var menu=document.getElementById('menu');
   menu.style.display='none';
  }
  const showMenu=()=>{
    
   var menu=document.getElementById('menu');
   menu.style.display='block';
  }
  return (
    <>
      <nav id="navbar"
      className="bg-[--bg-color] flex  justify-between items-center text-[#808dad] h-16 md:h-20">
        {/* name */}
        <a href="/" className="cursor-pointer">
          <h1 id="name" className="text-[32px] text-white text-xl md:text-3xl">
            <span className="text-[#01d293]">A</span>nkush{" "}
            <span className="text-[#01d293]">J</span>aiswal
          </h1>
        </a>

        {/* options */}
        <div>
          <div
            id="icon"
            className="lg:flex hidden items-center w-[100%]  gap-16 md-gap-24 justify-between  "
          >
            <a
              href="/"
              className="hover:text-[--site-theme-color] cursor-pointer"
            >
              Home
            </a>
            <a
              href="/#projects"
              className=" hover:text-[--site-theme-color] cursor-pointer"
            >
              Projects
            </a>
            <a className=" hover:text-[--site-theme-color] cursor-pointer">
              Gears
            </a>
            <a className=" hover:text-[--site-theme-color] cursor-pointer">
              Blog
            </a>

            {/* icons */}
            <div className="">
              <div className="flex flex-row items-center gap-3 border-l-2 pl-4 border-l-slate-500">
                <a
                  target="_blank"
                  title="Github Account"
                  id="github-account"
                  className="cursor-pointer text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150"
                  rel="noreferrer"
                  href="https://github.com/mrjaiswal122/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
                    </g>
                  </svg>
                </a>
                <a
                  target="_blank"
                  title="Twitter Account"
                  id="twitter-account"
                  className="cursor-pointer text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150"
                  rel="noreferrer"
                  href="https://twitter.com/obviouslyanku"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="0.9em"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  title="LinkedIn Account"
                  id="linkedin-account"
                  className="cursor-pointer text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/mrjaiswal122/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fillRule="nonzero"
                        d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* menu */}
        <div className="lg:hidden flex justify-end cursor-pointer items-center h-12 w-12 pr-3 text-white scale-150" onClick={showMenu}>
          <IoMenu />
        </div>
      </nav>
      
      {/* menu block */}
      <div id="menu" onClick={hideMenu} className="h-[100vh] w-[100vw] bg-[#171f3897] fixed top-0 left-0 hidden lg:hidden">

    <section className=" absolute top-0 right-0  w-[300px] h-[100vh] bg-[--bg-color]">
      <div className="absolute top-10 right-10 text-white cursor-pointer font-bold test text-2xl " onClick={hideMenu}><VscChromeClose /></div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-11">
          <a onClick={hideMenu} className='flex justify-center items-center gap-2 font-bold hover:text-[--site-theme-color]  text-[--site-text]' href="/"><AiFillHome />Home</a>
          <a onClick={hideMenu} className='flex justify-center items-center gap-2 font-bold hover:text-[--site-theme-color] text-[--site-text]' href="/#projects"><GrProjects />Projects</a>
          <a onClick={hideMenu} className='flex justify-center items-center gap-2 font-bold hover:text-[--site-theme-color]  text-[--site-text]' href=""><FaGears/>Gears</a>
          <a onClick={hideMenu} className='flex justify-center items-center gap-2 font-bold hover:text-[--site-theme-color] text-[--site-text]' href=""><FaPen/>Blog</a>
          <a onClick={hideMenu} className='flex justify-center items-center gap-2 font-bold hover:text-[--site-theme-color] text-[--site-text]' href=""><BiSolidContact />Contact Me</a>

      </div>
    </section>
      
      </div>
     
    </>
  );
}
export default Navbar;
