import React from 'react';
// import SocialLinks from '../SocialLinks/SocialLinks';
import './Intro.css';

const Intro = () => {
    return (
        <section id='intro' className='pt-24 flex py-5 flex-col lg:px-12 px-6 lg:flex-row-reverse items-center mx-auto'>
            <div data-aos="fade-up" className='w-full lg:w-1/2'>
                <img className='w-full mx-auto' src="https://assets-global.website-files.com/620e4b3d823b71ee91fa6d60/620e4b3d823b71131cfa7f64_Why_Should_You_Track_Employees%E2%80%99_Attendance__tmb.png" alt="" />
            </div>
            <div data-aos="fade-down" className='w-full lg:w-1/2'>
                <h1 className='text-xl font-bold'>WELCOME!</h1>
                <h3 className="text-3xl py-3">I'm a <span className='text-primary'>Front-end Developer</span></h3>
                <p className='text-justify'>I am a front-end MERN stack web developer.I love to designing websites & explore new features of websites. I am a fast learner and a very hard-working person.My goal is to become a FULL-Stack web developer.</p>

                <div className='flex gap-5'>

                    <a href="https://docs.google.com/document/d/18wQ_gacBSO-KFoFp_qEeOhngFN_J3ZTC/edit" download="Jakir-Resume.pdf" className="btn btn-primary mt-5 button-link bg-secondary my-btn uppercase text-white font-bold text-center">Download CV</a>
                    <a href='#about' className="btn btn-primary mt-5 button-link bg-secondary my-btn uppercase text-white font-bold text-center">About me</a>
                </div>
            </div>
        </section>
    );
};

export default Intro;