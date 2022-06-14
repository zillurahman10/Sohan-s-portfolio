import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import MyProjects from './MyProjects'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;