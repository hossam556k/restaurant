import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navs.css'
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../imges/logo.png';


const Navs=()=>{
    return(
        <>
              <Navbar expand="lg" sticky="top" >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} title="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  href="#home">Home</Nav.Link>
            <Nav.Link    href="#link">About us</Nav.Link>
            <Nav.Link   href="#link">Explore Foods</Nav.Link>
            <Nav.Link   href="#link">Reviews</Nav.Link>
            <Nav.Link    href="#link">FAq</Nav.Link>

           
          </Nav>
          <Nav>
            <Nav.Link id="lastnav">454854564</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default Navs;