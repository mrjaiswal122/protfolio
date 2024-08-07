import axios from "axios";
import { useState } from "react";
import Navbar from "../assets/Navbar";
import { TiDelete } from "react-icons/ti";
function Admin() {
  const [formdata, setFormData] = useState({
    name: "",
    title: "",
    repo: "",
    tags: [],
    img:"",
    liveLink:""
  });
  const [tag, setTag] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const deleteTag = (e) => {
    console.log(formdata.tags[e]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      tags: prevFormData.tags.filter((_,i) => i !== e),
    }));
  };
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(e.target);
    try {
      const res = await axios.post("/v2/admin", formdata);
      alert(res.data);
    } catch (err) {
      
      console.log(`Post request failed: ${err}`);
    }
  };

  const handleTag = (e) => {
    e.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      tags: [...prevFormData.tags, tag],
    }));
    setTag('');
   
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleTag(e);
    }
  };

  return (
    <>
      <header   className="min-w-full sticky top-0 bg-[#0e1630] h-[5.875rem]">
        <div   className="h-20 csw px-3 mx-auto">
          <Navbar />
        </div>
      </header>
        <section   className="flex h-full my-auto flex-wrap">

      <div   className=" flex flex-1 justify-center items-center">
        <div   className="w-[50vw] test justify-center items-center flex flex-col-reverse ">
          
            <div   className="bg-[--site-theme-color] rounded-md w-20 flex items-center my-3 justify-center hover:scale-110 transition-all">
              <label id="formButton" htmlFor="submit"   className="text-white cursor-pointer">
                Submit
              </label>
            </div>
          
          <div   className=" mx-auto">
            <form id="projectForm" onSubmit={submitForm}   className="flex flex-wrap ">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name of project*"
                  className="bg-transparent my-4"
                onChange={onChange}
              />
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title of the project*"
                  className="bg-transparent my-4"
                onChange={onChange}
              />
              <input
                type="text"
                name="repo"
                id="repo"
                placeholder="Repository link*"
                  className="bg-transparent my-4"
                onChange={onChange}
              />
              <div   className="">
                <div   className="flex flex-wrap">

                {formdata.tags.map((data,index)=>(
                  <span   className="mx-2 my-1 bg-[--site-text-bg] px-2 rounded-md text-white flex gap-1 justify-between items-center" key={index}>{data}
                  <div onClick={() => deleteTag(index)}>

                  <TiDelete/>
                  </div>
                  </span>
                ))}
                </div>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  placeholder="Tag*"
                    className="bg-transparent my-4"
                  onChange={(e) => setTag(e.target.value)}
                  onKeyDown={handleKeyPress}
                  value={tag}
                />
              </div>
              <input
                type="text"
                name="img"
                id="img"
                placeholder="Image Link"
                  className="bg-transparent my-4"
                onChange={onChange}
              />
              <input
                type="text"
                name="liveLink"
                id="liveLink"
                placeholder="Live Link"
                  className="bg-transparent my-4"
                onChange={onChange}
              />
              <input type="submit" name="submit" id="submit"   className="hidden" />
            </form>
          </div>
          <h1   className="text-2xl text-white my-8">Create new project</h1>

        </div>
      </div>
      <div   className=" flex-1 flex flex-col justify-between items-center test">

        <h1   className="text-2xl text-white my-8" >Add Skill</h1>
     {/* skills form */}
        <form id="skillForm"   className="flex gap-2 flex-wrap" action="/v2/adminForSkills" method="POST">
        <input   className="bg-transparent my-4" type="text" name="name" id="skillName" placeholder="Name of skills" />
        <input   className="bg-transparent my-4 "  type="text" name="icon" id="skillIcon" placeholder="Link to svg"/>
        <input   className="hidden" id="skillSubmit" type="submit" value="" />
        </form>

        <div   className="bg-[--site-theme-color] rounded-md w-20 flex items-center my-3 justify-center hover:scale-110 transition-all">
              <label htmlFor="skillSubmit"   className="text-white cursor-pointer">
                Submit
              </label>
            </div>
      </div>
        </section>
    </>
  );
}

export default Admin;