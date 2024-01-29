import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
            <Container  id='navbar'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <NavLink
                        className="nav-link" 
                        style={({ isActive }) => {
                            return isActive ? { color: '#bb86fc' } : {}
                        }}
                        end to="/react-portfolio/"
                    >Home
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        style={({ isActive }) => {
                            return isActive ? { color: '#bb86fc' } : {}
                        }}
                        to="/react-portfolio/projectgallery"
                    >ProjectGallery
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        style={({ isActive }) => {
                            return isActive ? { color: '#bb86fc' } : {}
                        }}
                        to="/react-portfolio/skillsgallery"
                    >Skills
                    </NavLink>
                    <NavLink
                        className="nav-link" 
                        style={({ isActive }) => {
                            return isActive ? { color: '#bb86fc' } : {}
                        }}
                        to="/react-portfolio/contact"
                    >Contact
                    </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header