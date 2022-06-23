import React from 'react';
// import './About.css'

const About = () => {
    return (
        <section id='about' className='py-4 lg:px-12 px-6 items-center mx-auto'>
            <div className='flex lg:flex-row flex-col gap-10 items-center'>
                <div className='lg:w-1/2 w-full'>
                    <img data-aos="fade" src="https://st2.depositphotos.com/3369547/8161/v/380/depositphotos_81611520-stock-illustration-web-developer-design.jpg?forcejpeg=true" className='w-full' alt="" />
                </div>
                <div className='grid grid-cols-1 gap-4 lg:w-1/2 w-full'>
                    <h2 className="text-4xl font-bold text-secondary">About Me</h2>
                    <p>I am a junior front-end MERN stack developer,i am learning new technologies about web engineering.I want to be a full-stack web developer. </p>
                    <p> Recently i learned MERN stack now i ma trying to learin advance topics about Mern stack. </p>
                    <div className='flex lg:flex-row flex-col gap-10 pt-2'>
                        <div>
                            <h1 className="text-2xl text-warning font-bold">12+</h1>
                            <p>Projects done</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;