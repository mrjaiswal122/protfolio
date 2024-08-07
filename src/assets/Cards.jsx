import axios from 'axios';
import { useEffect,useState } from 'react';
function Cards() {
  var[projects,setProjects]=useState([]);

useEffect(()=>{
  const fetchProjects= async()=>{
    
   try{

      const response=(await axios.get('/v2/allprojects'));      
      setProjects(response.data);
    }catch(error){
      console.log(`unable to fetch projects${error}`);
    }
  }
  fetchProjects();
  
}, []);
  


return (
  <div className="flex flex-wrap">
  {projects.map((data, index) => (
  <div className='my-[0.625rem] px-3 hover:scale-105 hover:ease-out w-full md:w-[33.333333%] sm:w-[50%] max-h-fit duration-300 ' key={index}>
  <div  className='mb-2 px-[0.937rem] pt-5 pb-[0.625rem] h-full bg-[--site-card-bg] rounded-md'>
          <a href={data.liveLink} target='_blank'  >
          
         <img className='rounded-lg w-full sm:h-[121.500px] md:h-[104px] lg:h-[149.609px] xl:h-[183.38px]' src={data.img} alt="project image" />
          </a>
          <h3 className='text-white pt-[0.625rem]'>{data.name}</h3>
          <p>{data.title}</p>
          <div className='flex flex-wrap justify-start '>
            {/* tags */}
            {data.tags.map((tags,index)=>(
            <span className='text-xs text-[white] my-1 ml-0 mr-2 py-[0.2rem] px-[0.4rem] bg-[--site-text-bg] rounded-md hover:text-black hover:ease-out duration-300 hover:bg-white' key={index}>{tags}</span>
          ))}</div>
            <div className='flex  gap-3'>

            {data.liveLink?<a target='_blank' href={data.liveLink} className='bg-[--site-text-bg]  hover:ease-out duration-300 p-1 rounded my-[0.625rem] text-sm  text-white hover:bg-[--site-theme-color]'>Live Link</a>:''}
            {data.repo?<a target='_blank' href={data.repo} className='bg-[--site-text-bg] hover:ease-out duration-300 p-1 rounded my-[0.625rem] text-sm  text-white hover:bg-[--site-theme-color]'>Repository</a>:''}
            
            </div>
         
          </div>

      </div>
    ))}
  </div>
);
}

export default Cards