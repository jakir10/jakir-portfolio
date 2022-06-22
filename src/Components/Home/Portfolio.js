import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css'

const Portfolio = ({ portfolio }) => {
    const navigate = useNavigate();

    return (
        <div className='portfolio h-64 bg-white flex text-neutral relative flex-col gap-3 shadow-xl justify-center px-5 rounded-lg border py-2'>
            <img className='rounded-lg mt-2 w-full h-40' src={portfolio.image} alt="" />
            <h1 className="text-2xl font-bold text-primary">{portfolio?.name}
            </h1>

            <div className='details'>
                <div className='flex text-center gap-3 bg-white items-center justify-center w-full absolute bottom-0 left-0 h-60 rounded-lg'>
                    <div className="badge badge-secondary w-10 h-10"><a href={portfolio?.link} target='blank' title='Livelink'><i className="fa-solid fa-link"></i></a></div>

                    <div className="badge badge-info w-10 h-10"><a href={portfolio?.code || portfolio?.client} target='blank' title='Client/Code'><i className="fa-solid fa-code"></i></a></div>

                    <div className="badge badge-warning w-10 h-10"><h1 target='blank' onClick={() => navigate('/project/' + portfolio?.id)} title='Details'><i className="fa-solid fa-magnifying-glass"></i></h1></div>

                    {portfolio?.server && <div className="badge badge-outline w-10 h-10"><a href={portfolio?.server} target='blank' title='Server'><i className="fa-solid fa-server"></i></a></div>}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;