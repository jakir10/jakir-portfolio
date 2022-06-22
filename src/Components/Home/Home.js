import React from 'react';
import Contact from './Contact';
import Intro from './Intro';
import Portfolios from './Portfolios';

const Home = () => {
    return (
        <div>
            <Intro />
            <Portfolios />
            <Contact />

        </div>
    );
};

export default Home;