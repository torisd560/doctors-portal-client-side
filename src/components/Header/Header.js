import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/headerLogo.png'
import './Header.css'


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className = 'p-3'>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" style={{width : '200px'}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto custom-nav align-items-center">
            <Nav.Link as = {Link} to ="/home">Home</Nav.Link>
            <Nav.Link as = {Link} to ="/about">About</Nav.Link>
            <Nav.Link as = {Link} to ="/contact">Contact</Nav.Link>
            <Nav.Link as = {Link} to ="/myOrders">MyOrders</Nav.Link>
            <Nav.Link as = {Link} to ="/manageOrders">ManageOrders</Nav.Link>
            <Nav.Link as = {Link} to ="/addService">Add New Service</Nav.Link>
            <Nav.Link as = {Link} to ="/Login">
            <Button   className=' px-4 text-white custom-login-btn'>Login</Button>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;