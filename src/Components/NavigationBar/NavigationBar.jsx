import React from "react";
import {Navbar,Container,Nav} from 'react-bootstrap';
import './NavigationBar.css';
import logo from './logo.png';

function NavigationBar(){
    return (
      <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
     >
       <Container>
         <Navbar.Brand href="#home">
           <div className="nav-brand">
             <img
             alt=""
             src={logo}
             className="nav-brand-logo"
             />
             <h1
             class="nav-brand-heading"
             >
             GrihSangini
             </h1>
           </div>
         </Navbar.Brand>
         <Navbar.Toggle/>
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav>
             <Nav.Link href="#aboutus">About Us</Nav.Link>
             <Nav.Link href="#services">Services</Nav.Link>
             <Nav.Link href="#reviews">Reviews</Nav.Link>
             <Nav.Link href="#contactus">Contact Us</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
    );
}

export default NavigationBar;