import React, { useEffect, useRef } from 'react';
import pdf from "../pdf/SumitGurjarResumeII.pdf";
import hero from  "./data/hero.json";
import Typed from 'typed.js';


const HomePage = () => {
  const typedRef=useRef(null);
  useEffect(()=>{
    const options={
      strings : ["welcome to my Profile",
        "I am Sumit Singh Gurjar",
        "I'm software Developer",
        "Front-end Developer(React Js)"
       ],
      typedSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed =new Typed(typedRef.current,options)
    return ()=>{
      typed.destroy()
    }
  },[])
  return (
    <>
     <div className='container home' id='Home'>
    <div className='left'
        data-aos="fade-up-right"
        data-aos-duration="1000">
      <h1 ref={typedRef}>Hey, I am Sumit Gurjar software developer </h1>
     <a href={pdf} download="PDF_Download" className='btn btn-outline-warning my-3'>Download Resume</a>
    </div>
    <div className='right'>
      <div className='img'
          data-aos="fade-up-left"
          data-aos-duration="1000">
      <img src={`assets/${hero.imgSrc}`} alt='mypic'/>
      </div>
    </div>
     </div> 
    </>
  )
}

export default HomePage;
