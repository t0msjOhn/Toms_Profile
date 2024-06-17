import React from 'react';
import {TjI} from '../../assets/images';
import './loading.css'; 

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <img src={TjI} alt="Loading..." className="w-32 h-32 appear-animation" />
    </div>
  );
};

export default Loading;
