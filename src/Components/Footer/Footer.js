import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import footerLogo from '../../images/footerLogo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='custom-bg  p-3' >
            <Container>
                <div className="row g-4 p-4">
                    <div className="col-md-4">
                        <h4 className='custom-text-warning mb-4'>Quick Links</h4>
                        <p className='lh-lg'>Home
                            <br />
                            About Us
                            <br />
                            Destination
                            <br />
                            Contact
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4 className='custom-text-warning mb-4'>Contact Info</h4>
                        <p><i className="fas fa-phone-alt custom-text-warning me-2"></i>(+62) 361 154875</p>
                        <p><i className="fas fa-envelope me-2 custom-text-warning"></i>contact@domain.com</p>
                        <p><i className="fas fa-map-marker-alt me-2 custom-text-warning"></i>Jl. Raya Ubud No.88, Bali 80571</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className='custom-text-warning mb-4'>Make a Reservation</h4>
                        <p>Our Support and Sales team is available 24 /7 to answer your queries</p>
                        <Button className='custom-btn'><i className="fas fa-phone-alt text-white me-2"></i>(+62) 361 154875</Button>
                    </div>
                </div>
                <hr className='text-white' />
                <div className="row text-center">
                    <div className="col-md-4">
                        <img src={footerLogo} alt="" style={{ width: '200px' }} className='img-fluid' />
                    </div>
                    <div className="col-md-8">
                        <p className='text-center'>Copyright © 2021 Travel & Tour Agency Template Kit by Jegtheme</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;