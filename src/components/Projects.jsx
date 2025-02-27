import React from 'react';
import {bp1,s1,jn1} from '../assets/images'

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-12 pt-8">
      <div className="max-w-12xl p-3 mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <a href='https://github.com/t0msjOhn/Blog-Post' target='_blank'><img src={bp1} alt="Blog Post" className="w-full object-cover" /></a>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Blog Post</h3>
              <p className="text-gray-700">Personal Website for Blogging</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <a href='https://github.com/t0msjOhn/Solvify' target='_blank'><img src={s1} alt="Solvify" className="w-full object-cover" /></a>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solvify</h3>
              <p className="text-gray-700">AI assistant for field Engineers</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <a href='https://github.com/t0msjOhn/newsapp' target='_blank'><img src={jn1} alt="John's News " className="w-full object-cover" /></a>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">John's News</h3>
              <p className="text-gray-700">Personalised App for showing daily NEWS</p>
            </div>
          </div>
        </div>
        <div className='mt-6 text-center text-xl underline'><a href='https://github.com/t0msjOhn'>See more</a></div>
      </div>
    </section>
  );
};

export default Projects;