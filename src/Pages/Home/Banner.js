import React from 'react';
import 'react-simple-typewriter/dist/index.js'
import './Banner.css'

const Banner = () => {



    return (
        <div className='banner'>
            <div className='ml-24'>
                <h1 className='text-4xl'>Hello! I'm</h1>
                <h2 className='text-6xl font-bold'>MD. ZILLUR RAHMAN</h2>
                <p className='text-2xl my-4'>I'm a Full Stack Web Developer</p>
                <a href="https://drive.google.com/file/d/1r9s-ZqSZo38PmIeXDk5y7XE1SCZUIomQ/view?usp=sharing" target="_blank" className='btn btn-primary btn-outline'>Get Resume</a>
            </div>

        </div>
    );
};

export default Banner;