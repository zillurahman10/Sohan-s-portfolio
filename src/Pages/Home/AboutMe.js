import React from 'react';
import './AboutMe.css'
import logo from '../../assets/logo.png'

const AboutMe = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>About Me</h1>
            <div className='flex justify-center'>
                <div className='text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci nam provident, voluptas neque voluptatibus cupiditate sapiente sint corrupti possimus animi quos. Fugit, sint nemo. Cupiditate ullam in quos, odio possimus, veritatis doloribus vero autem maiores, cumque placeat. Nulla, consequatur tenetur distinctio quasi maiores numquam repellendus eos dolores repellat suscipit.</p>
                </div>
                <div className='img-div'>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;