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
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }}
                            to="/"
                        ><p className="nav-link">Home </p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }}
                            to="/contact"
                        ><p className="nav-link">Contact </p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }}
                            to="/projectgallery"
                        ><p className="nav-link">ProjectGallery</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header