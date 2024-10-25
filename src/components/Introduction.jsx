import React from 'react';
import {dp1,bg1} from '../assets/images'

const Introduction = () => {
  return (
    <section id="home" className="bg-white text-center py-12 m-12 relative">
      <div 
        className="max-w-10xl mx-auto p-8 bg-cover bg-center rounded-lg"
        style={{ backgroundImage:`url(${bg1})` }}
      >
        <div className="relative inline-block" style={{ transform:'translateY(-55%)' }}>
          <img 
            src={dp1}
            alt="Toms John" 
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md" 
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pt-1">Toms John</h1>
        </div>
        <p className="text-xl -mt-10" style={{color:'#787373'}}>A Software Engineer, who is passionate about <br/> creating innovative projects</p>
        <a 
          href="https://drive.google.com/file/d/1l0oi1Du1n12P9WIDt12bl_4dCmEImn-j/view?usp=drive_link"
          className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-full"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Introduction;
