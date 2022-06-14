import React from 'react';
import './AboutMe.css'
import sohan from '../../assets/Sohan pro photo.jpg'

const AboutMe = () => {
    return (
        <div>
            <div className='flex justify-center justify-between container-div'>
                <div className='text'>
                    <h1 className='text-4xl font-bold'>About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci nam provident, voluptas neque voluptatibus cupiditate sapiente sint corrupti possimus animi quos. Fugit, sint nemo. Cupiditate ullam in quos, odio possimus, veritatis doloribus vero autem maiores, cumque placeat. Nulla, consequatur tenetur distinctio quasi maiores numquam repellendus eos dolores repellat suscipit.</p>
                </div>
                <div className='img-div'>
                    <img className='sohan-pro-photo' src={sohan} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;