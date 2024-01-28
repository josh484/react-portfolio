import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" >
            <Container id='navbar' className=' d-flex justify-content-end'>
                <Nav>
                    <NavLink
                        className="nav-link"
                        style={({ isActive }) => {
                            return isActive ? { color: '#bb86fc' } : {}
                        }}
                        to="/react-portfolio/"
                    >Home
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        style={({ isActive }) => {
                            return isActive ? { color: '#bb86fc' } : {}
                        }}
                        to="/projectgallery"
                    >ProjectGallery
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        style={({ isActive }) => {
                            return isActive ? { color: '#bb86fc' } : {}
                        }}
                        to="/contact"
                    >Contact
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header