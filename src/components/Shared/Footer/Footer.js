import React from 'react';
import { Button } from 'react-bootstrap';
import  './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark text-white  d-flex justify-content-around align-items-center p-4'>
            <span>© 2021 Your Company. By Unitemplates</span>
            <div className='footer-icon'>
                <a href="/"><i className="fab fa-facebook-square fs-3 "></i></a>
                <a href="/"><i className="fab fa-github-square fs-3  ms-3"></i></a>
                <a href="/"><i className="fab fa-twitter-square fs-3  ms-3"></i></a>
                <a href="/"><i className="fab fa-linkedin fs-3  ms-3"></i></a>
            </div>
            <div>
                <span >Home</span>
                <span className='ms-3'>About</span>
                <span className='ms-3'>Contact Us</span>
            </div>
            <Button variant="danger" ><i className="fas fa-chevron-up"></i></Button>
        </div>
    );
};

export default Footer;