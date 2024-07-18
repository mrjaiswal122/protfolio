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
    try {
      const res = await axios.post("/v2/admin", formdata);
      console.log(res);
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
      <header className="min-w-full sticky top-0 bg-[#0e1630] h-[5.875rem]">
        <div className="h-20 csw px-3 mx-auto">
          <Navbar />
        </div>
      </header>
      <div className="min-w-full cc flex flex-1 justify-center items-center">
        <div className="w-[50vw] test flex h-[60vh]">
          <div className="flex-1 flex flex-col justify-center items-center">
            <h1 className="text-2xl text-white mb-8">Create new project</h1>
            <div className="bg-[--site-theme-color] rounded-md w-20 flex justify-center hover:scale-110 transition-all">
              <label htmlFor="submit" className="text-white cursor-pointer">
                Submit
              </label>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-evenly items-center">
            <form onSubmit={submitForm} className="flex flex-col justify-between">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name of project"
                className="bg-transparent my-4"
                onChange={onChange}
              />
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title of the project"
                className="bg-transparent my-4"
                onChange={onChange}
              />
              <input
                type="text"
                name="repo"
                id="repo"
                placeholder="Repository link"
                className="bg-transparent my-4"
                onChange={onChange}
              />
              <div className="">
                <div className="flex flex-wrap">

                {formdata.tags.map((data,index)=>(
                  <span className="mx-2 my-1 bg-[--site-text-bg] px-2 rounded-md text-white flex gap-1 justify-between items-center" key={index}>{data}
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
                  placeholder="Tag"
                  className="bg-transparent my-4"
                  onChange={(e) => setTag(e.target.value)}
                  onKeyDown={handleKeyPress}
                  value={tag}
                />
              </div>
              <input type="submit" name="submit" id="submit" className="hidden" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;