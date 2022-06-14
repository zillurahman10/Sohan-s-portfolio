import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import MyCrafts from './MyCrafts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyCrafts></MyCrafts>
        </div>
    );
};

export default Home;