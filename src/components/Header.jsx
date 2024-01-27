import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css'
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id='main'>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink
                            className="nav-link"
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }}
                            to="/"
                        >Home 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }}
                            to="/contact"
                        >Contact
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink
                            className="nav-link"
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }}
                            to="/projectgallery"
                        >ProjectGallery
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header