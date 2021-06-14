import React from 'react';
import YouTube from "react-youtube";
import scss from './Courses.scss';

const Contact = () => {
  return (
    <div className={scss.courses}>
      <YouTube videoId="EejFOEn4YjU" opts={{    height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },}} />
      <YouTube videoId="CqLJhj4gUvU" opts={{    height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },}} />
      <YouTube videoId="3ySlyTqpLx0" opts={{    height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },}} />
      <YouTube videoId="GE2qnXC8UMg" opts={{    height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },}} />
    </div>
  );
};

export default Contact;
