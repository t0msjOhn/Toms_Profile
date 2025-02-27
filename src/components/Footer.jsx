import React from 'react';
import { gh1,l1,i1} from '../assets/images';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center p-14">
    <p className='pb-6'>Toms John <br/>"Passionate Engineer"</p>
      <div className="flex justify-center space-x-3">
        <a href="https://www.linkedin.com/in/toms-john-b8429221b/" target='_blank' className="hover:bg-white"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/linkedin--v1.png" alt="linkedin--v1"/></a>
        <a href="https://github.com/t0msjOhn" target='_blank' className="hover:bg-white"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/github.png" alt="github"/></a>
        <a href="https://www.instagram.com/t0ms_j0hn/" target='_blank' className="hover:bg-white"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png" alt="instagram-new--v1"/></a>
      </div>
      <p className='mt-8'>Made with 🤍 in Bengaluru</p>
    </footer>
  );
};

export default Footer;
