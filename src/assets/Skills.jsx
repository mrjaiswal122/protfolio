import axios from "axios";
import { useEffect,useState } from "react";

function Skills() {
var [skillsData, setSkillsData]=useState([]);

useEffect(()=>{
  const fetchSkills= async()=>{
     const response= await axios.get('/v2/allskills');
     setSkillsData(response.data);
  }
  fetchSkills();
},[])
  return (
    <section id='skills'   className="csw mx-auto px-3 mt-[150px]">
        <h1   className="relative dash m-10 text-2xl text-[--site-theme-color]">Skills</h1>

        <div   className="flex gap-7 flex-wrap">
            {
              skillsData.map((skill,i)=>{
                var icon=skill.icon;
                const isReactJS = skill.name.toLowerCase() === 'reactjs';
                const isExpressJS = skill.name.toLowerCase() === 'expressjs';
              return <div key={i}>
                  <div    className="  flex flex-col justify-center hover:scale-105 hover:ease-out duration-300 gap-1 items-center"> 
                  <div   className="w-10 h-10" style={{ color: isReactJS ? '#087ea4' : 'inherit',backgroundColor: isExpressJS? '#ffffff':'inherit',padding: isExpressJS? '1px':'inherit'}} dangerouslySetInnerHTML={{ __html: icon }} />
                     <div   className="text-white">{skill.name}</div>
                  </div>
               </div>
                                  })
            }
        </div>

    </section>
  )
}

export default Skills;