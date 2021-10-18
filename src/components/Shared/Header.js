import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className ='fw-bold'>
                <Container>
                    <Navbar.Brand href="#home">MEDICO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto text-secondary ">
                            <Nav.Link as={Link} to ="/home"  className ='ms-3'>Home</Nav.Link>
                            <Nav.Link as={Link} to ="/about"  className ='ms-3'>About Us</Nav.Link>
                            <Nav.Link as={Link} to ="/services"  className ='ms-3'>Services</Nav.Link>
                            <Nav.Link as={Link} to ="/doctors"  className ='ms-3'>Doctors</Nav.Link>
                            <Nav.Link as={Link} to ="/contact"  className ='ms-3'>Contact Us</Nav.Link>
                            <Button className='text-uppercase ms-3 bg-custom-danger border-0'>Appointment</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;