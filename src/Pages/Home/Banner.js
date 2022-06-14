import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.js'
import './Banner.css'

const Banner = () => {



    return (
        <div className='banner'>
            <div className='ml-24'>
                <h1 className='text-4xl'>Hello! I'm</h1>
                <h2 className='text-6xl font-bold'>MD. ZILLUR RAHMAN</h2>
                <p className='text-2xl my-4'>I'm a Full Stack Web Developer <span>
                    <Typewriter
                        loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        words={['Web Developer']}
                    ></Typewriter>
                </span></p>
                <button className="btn btn-outline btn-secondary button-about-me">About Me</button>
                <a href="" className='btn btn-primary btn-outline ml-5'>Get Resume</a>
            </div>

        </div>
    );
};

export default Banner;