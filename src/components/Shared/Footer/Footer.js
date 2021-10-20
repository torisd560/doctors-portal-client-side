import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className=' bg-custom-secondary '>
            {/*--------------- footer fast part------------ */}
            <Container>
                <div className="row bg-custom-secondary text-white p-4">
                    <div className="col-md-3">
                        <h4>About Us</h4>
                        <div className='d-flex align-items-center mb-4'>
                            <div className='underline'></div>
                            <div className='underline-small'></div>
                            <div className='underline'></div>
                        </div>
                        <p> The Romans did not have dedicated, public hospitals.exist until the Christian period. Towards the end of the 4th century, the "second medical revolution" took place with the founding of the first Christian hospital in the eastern Byzantine Empire by Basil of Caesare.</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Quick Links</h4>
                        <div className='d-flex align-items-center mb-4' >
                            <div className='underline'></div>
                            <div className='underline-small'></div>
                            <div className='underline'></div>
                        </div>
                        <p className='lh-lg'>How We Are
                            <br />
                            Terms & Conditions
                            <br />
                            Privacy
                            <br />
                            Our Awards
                            <br />
                            Testimonials
                            <br />
                            Our Professionals</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Promotions</h4>
                        <div className='d-flex align-items-center mb-4'>
                            <div className='underline'></div>
                            <div className='underline-small'></div>
                            <div className='underline'></div>
                        </div>
                        <p>Towards the end of the 4th century the  medical revolution" took place with the founding of the first Christian hospital.</p>
                        <input type="email" placeholder='Email' className='form-control' />
                        <br />
                        <Button className='bg-custom-danger border-0' >Subscribe</Button>
                    </div>
                    <div className="col-md-3">
                        <h4>Get In Touch</h4>
                        <div className='d-flex align-items-center mb-4'>
                            <div className='underline'></div>
                            <div className='underline-small'></div>
                            <div className='underline'></div>
                        </div>
                        <h5><i class="fas fa-building  me-2 text-custom-danger fs-3"></i>Clinic Address</h5>
                        <p>Tupac Amaru 200 - Lima</p>
                        <h5><i class="fas fa-phone-square-alt me-2 text-custom-danger fs-3"></i>Call Center</h5>
                        <p>01 234567899</p>
                        <h5><i class="fas fa-envelope-square me-2 text-custom-danger fs-3"></i>E-mail Address</h5>
                        <p>info@medicotheme.xyz</p>
                    </div>
                </div>
            </Container>
                <hr className='bg-light' />
            {/* -------------footer last part --------------*/}
            <div className='bg-custom-secondary  text-white  d-flex justify-content-around align-items-center p-4'>
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
                <Button className='bg-custom-danger border-0' ><i className="fas fa-chevron-up"></i></Button>
            </div>
        </div>
    );
};

export default Footer;