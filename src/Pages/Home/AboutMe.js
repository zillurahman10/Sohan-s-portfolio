import React from 'react';
import './AboutMe.css'
import sohan from '../../assets/sohan pro photo.jpg'

const AboutMe = () => {

    const x = [
        {
            name: 'Car Parts Website',
            img: 'https://i.ibb.co/d0t8S4Q/project1.png',
            description: '',
            website: 'https://assignment12-zr.firebaseapp.com/',
            clientCode: 'https://github.com/zillurahman10/-manufacturer-website-client-side',
            serverCode: 'https://github.com/zillurahman10/-manufacturer-website-server-side'
        },
        {
            name: 'Car Dealer Website',
            img: 'https://i.ibb.co/frS6YN2/project2.png',
            description: '',
            website: 'https://cardotcom-30121.web.app/',
            clientCode: 'https://github.com/zillurahman10/-warehouse-management-client-side',
            serverCode: 'https://github.com/zillurahman10/warehouse-management-server-side'
        },
        {
            name: 'A Tutor Website',
            img: 'https://i.ibb.co/hgmk4MQ/project3.png',
            description: '',
            website: 'https://doc-fine.web.app/',
            clientCode: 'https://github.com/zillurahman10/independent-service-provider'
        }
    ]
    return (
        <div>
            <div className='flex justify-center justify-between container-div'>
                <div className='text'>
                    <h1 className='text-4xl font-bold'>About Me</h1>
                    <p>Hello! I am Zillur, a passionate full stack web developer. I develop Web aplication and desktop aplication. My core skill based on ReactJS and I love to do most of the things using ReactJS. I love to make the web more open to the world.</p>
                </div>
                <div className='img-div'>
                    <img className='sohan-pro-photo' src={sohan} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;