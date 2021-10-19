import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" className='fw-bold'>
                <Container>
                    <Navbar.Brand href="#home">MEDICO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto my-2 text-secondary">
                            <Nav.Link as={Link} to="/home" className='ms-3'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className='ms-3'>About Us</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services" className='ms-3'>Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors" className='ms-3'>Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className='ms-3'>Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/apointment" className='ms-3'>APOINMENT</Nav.Link>
                            <Nav.Link as={Link} to="/login" className='ms-3'>
                            <span className='text-custom-danger me-3'>{user?.displayName}</span>
                                {user.email ? <Button onClick = {logOut} className=' bg-custom-danger border-0'>LogOut</Button>
                                    :
                                    <Button className=' bg-custom-danger border-0'>Login</Button>}
                                    
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;