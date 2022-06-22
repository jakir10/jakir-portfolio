import React from 'react';
import Portfolio from './Portfolio';
import { useState } from 'react';
import { useEffect } from 'react';

const Portfolios = () => {
    const [portfolios, setPortfolios] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setPortfolios(data))
    }, [])

    return (
        <section id='portfolio'>
            <h1 className='uppercase text-center font-bold text-4xl pt-6 pb-3'>Portfolios</h1>
            <div className='py-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-12 px-5 gap-5'>
                {
                    portfolios?.map(portfolio => <Portfolio key={portfolio.id} portfolio={portfolio}></Portfolio>)
                }
            </div>
        </section>
    );
};

export default Portfolios;