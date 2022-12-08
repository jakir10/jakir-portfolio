import React, { useRef } from 'react';
import './Contact.css';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const name = e?.target?.name?.value;
        const email = e?.target?.email?.value;
        const message = e?.target?.message?.value;

        if ((!name || !email) || (!message || !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email))) {
            return toast.error('Please input valid information!');
        }
        else {
            toast.success('Thanks for Contact me!');
        }

        emailjs.sendForm('service_sbsrg3r', 'template_dcck86v', form.current, 'Kn-mjWewQZ0mwDrbc')
            .then((result) => {
                console.log(result?.text);
            }, (error) => {
                console.log(error?.text);
            });

        e.target.reset();
    };


    return (
        <section id='contact' className='py-5 flex lg:flex-row flex-col lg:px-12 my-5 px-5 items-center'>
            <div className='lg:w-1/2 w-full mx-auto'>
                <img data-aos="flip-left" src="https://ak.picdn.net/shutterstock/videos/1084952701/thumb/11.jpg?ip=x480" alt="" className='w-full mx-auto rounded-lg' />
            </div>
            <div className='lg:w-1/2 w-full mx-auto'>
                <form ref={form} onSubmit={sendEmail} className='w-11/12 text-black flex flex-col gap-2 mx-auto'>
                    <h2 className={`text-4xl font-bold pb-3 text-secondary ${localStorage.getItem('theme') === ('light' || null) && 'text-black'} ${localStorage.getItem('theme') === 'dark' && 'text-white'}`}>Contact Me</h2>
                    <input className='w-full' type="text" placeholder='Your Name' name="name" id="" />
                    <input className='w-full' type="email" placeholder='Your Email' name="email" id="" />
                    <textarea className='w-full resize-none' placeholder='Your Message' name="message" id="" cols="30" rows="6"></textarea>
                    <input type='submit' value={'Send Message'} className='mt-2 ml-2 font-bold text-white bg-secondary my-btn'></input>
                </form>
            </div>
        </section>
    );
};

export default Contact;