import React from 'react';
import Mideo from './monster.mp4'

const Video = () => {
  return (
    <div>
      <video controls width="100%" height="auto">
        <source src={Mideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;