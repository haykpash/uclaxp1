import React from 'react';
//import React, { Component } from 'react'
// import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import './Video.scss';

const Video = () => {
    return (
        <div className='tape'>
            <ReactPlayer 
            url="https://www.youtube.com/watch?v=vrfeX8asEV8"
            />
            </div>
        
    )
}

export default Video;