import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import EmailValidator from 'email-validator';
function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if(EmailValidator.validate(event.target.email.value)==true){
    setResult("Sending....");
    const formData = new FormData(event.target);
       
 formData.append("access_key", "a86aecda-efe7-4121-9754-007213b97bf4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }else{
    setResult('Invalid Email !!')
  }
  };
  return (
    <section id="contact" className="pt-[150px] pb-[60px] ">
        <div className="csw mx-auto   md:flex  justify-between" > 
              <div className="px-3">
                <h3 className="text-white text-2xl my-6">Connect with me </h3>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-4  items-center">
                         
                    <span className="text-[--site-theme-color] text-2xl "><IoLocationOutline /></span>Planet Earth 🌍
                    </div>
                    <div className="flex gap-4  items-center">
                        <span className='text-[--site-theme-color] text-2xl '> <IoMailOutline /></span>
                    obviouslyankush@gmail.com
                    </div>
                    <div className="flex gap-4  items-center">
                        <span className='text-[--site-theme-color] text-xl'> <BsFillTelephoneFill /></span>
                    +91 8840032267
                    </div>
                </div>

                <div className="flex flex-row items-center gap-3 text-xl mt-5">
                <a
                  target="_blank"
                  title="Github Account"
                  id="github-account"
                  className="cursor-pointer hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1  "
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
                  className="cursor-pointer  hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1  "
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
                  className="cursor-pointer  hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1  "
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
              <div className="px-3 md:w-[375px]">
                  <h3 className="dash relative ml-10 my-6 text-2xl text-[--site-theme-color]">Conntact me</h3>
                  <form onSubmit={onSubmit}  className="flex flex-col gap-6" name="contactme" id="contactMe">
                    <input type="hidden" name="access_key" value="a86aecda-efe7-4121-9754-007213b97bf4"/>
                    <input className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-390 text-white" type="text" name="name" id="name" placeholder="Enter your name" required={true}/>
                    <input className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-390 text-white" type="email" name="email" id="email" placeholder="Enter your email" required={true}/>
                     <textarea name="description" id="description" placeholder="Enter Your Message" className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-390 text-white" required={true}></textarea>
                     <input  type="submit" value="Send Message" className="text-white bg-[#3a83f6] py-2" id="conatctsubmit" />
                     <span className={result==='Invalid Email !!'?'text-red-400':'text-[--site-theme-color]'}>{result}</span>
                  </form>
            </div>
        </div>
    </section>
  )
}
export default Contact