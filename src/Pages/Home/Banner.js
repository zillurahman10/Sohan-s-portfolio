import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='ml-24'>
                <h1 className='text-4xl'>Hello!</h1>
                <h2 className='text-6xl font-bold'>I'm RAJBIR HASSAN</h2>
                <p className='text-2xl my-4'>I'm a Baby</p>
                <button class="btn btn-outline btn-primary button-about-me">About Me</button>
            </div>
        </div>
    );
};

export default Banner;