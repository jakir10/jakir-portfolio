import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-neutral text-white'>
            <section className="footer px-10 py-5">
                <div>
                    <span className="footer-title">Address</span>
                    <li className="list-none">Dhaka</li>
                    <li className="list-none">Dhaka, Bangladesh</li>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <li className="list-none">(+880) 168*******</li>
                    <li className="list-none">jakir.cse.bubt@gmail.com</li>
                </div>
            </section>
            <section className="footer items-center justify-center px-4 py-3 border-y">
                <p>&copy; copyright {new Date().getFullYear()} - All right reserved by Jakir Hossain</p>
            </section>
        </footer>
    );
};

export default Footer;