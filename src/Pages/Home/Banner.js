import React from 'react';
import Typed from 'typed.js';
import { Typewriter } from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.js'
import './Banner.css'

const Banner = () => {
    // const typed = new Typed(".auto-type", {
    //     strings: ["Web Developer", "Full Stack Web Developer", "Baby"],
    //     typeSpeed: 150,
    //     backSpeed: 150,
    //     loop: true
    // })

    // Can also be included with a regular script tag

    // var options = {
    //     strings: ['Baby', 'Web developer'],
    //     typeSpeed: 40
    // };

    // var typed = new Typed('.element', options);
    return (
        <div className='banner'>
            <div className='ml-24'>
                <h1 className='text-4xl'>Hello!</h1>
                <h2 className='text-6xl font-bold'>I'm RAJBIR HASSAN</h2>
                <p className='text-2xl my-4'>I'm a <span>
                    <Typewriter
                        loop
                        cursor
                        cursorStyle='.'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        words={['Baby', 'Web Developer', 'Photo']}
                    ></Typewriter>
                </span></p>
                <button class="btn btn-outline btn-primary button-about-me">About Me</button>
            </div>

        </div>
    );
};

export default Banner;