import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../Layout/Logo';

const NavigationBar = () => (
    <nav>
        <div className="nav-wrapper">
            <Logo />
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    </nav>
)


export default NavigationBar;