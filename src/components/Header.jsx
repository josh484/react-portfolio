import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css'
function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id='main'>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <NavLink
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }}
                            to="/"
                        ><a class="nav-link">Home </a>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }}
                            to="/contact"
                        ><a class="nav-link">Contact </a>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }}
                            to="/projectgallery"
                        ><a class="nav-link">ProjectGallery</a>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header