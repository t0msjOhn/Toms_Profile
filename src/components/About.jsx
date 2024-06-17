import React from 'react';
import {l1} from '../assets/images'

const About = () => {
  return (
    <section id="about" >
    <div 
      className="max-w-12xl mx-auto p-8 bg-cover bg-center rounded-lg bg-gray-100"
    >
    <h2 className="text-3xl font-bold text-center">About Me</h2>
    <div className="text-center mt-2 flex items-center justify-center">
    <img src={l1} alt="Image" className='h-1.35'/>
    </div>
      <p className="text-center mb-8 mt-7">
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <h3 className="text-2xl font-semibold">Get to know me!</h3>
          <p className="mt-4">
            I am an aspiring software developer passionate about creating innovative projects and continuously updating my knowledge. 
            I am active on <a href='https://github.com/t0msjOhn' target="_blank" className='underline hover:underline-offset-4 text-blue-600'>GitHub</a>, where I regularly contribute to various projects and collaborate with the developer community. 
            I am eager to bring my enthusiasm and problem-solving skills to an entry-level engineering role to make a meaningful impact. 
            <br />
            If you'd like to get in touch, feel free to contact me!
            <br/>
            <a href="mailto:tomsjohnse@gmail.com"><button className="mt-4 px-4 py-2 bg-black text-white rounded-xl">Contact Me</button></a>
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">My Skills</h3>
          <div className="flex flex-wrap mt-2 ">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Java', 'Python', 'Express', 'Node', 'Bootstrap', 'Git', 'MongoDB', 'MySQL'].map((skill) => (
              <span key={skill} className="bg-gray-200 text-gray-800 p-2 m-2 rounded">{skill}</span> 
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
