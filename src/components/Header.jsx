import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" >
                <Container id='navbar' className=' d-flex flex-row-reverse'>
                    <Nav className="me-auto d-flex flex-row-reverse" id='navCon'>
                        <NavLink
                            className="nav-link"
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }}
                            to="/"
                        >Home
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }}
                            to="/contact"
                        >Contact
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }}
                            to="/projectgallery"
                        >ProjectGallery
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header