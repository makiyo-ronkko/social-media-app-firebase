import React from 'react'
import Logo from './Logo';
import NonRegisteredUsers from './NonRegisteredUsers';
import RegisteredUsers from './RegisteredUsers';

const NavigationBar = () => (
    <nav className="nav-wrapper">
        <div className="container">
            <Logo></Logo>
            <ul className="right hide-on-med-and-down">
                <NonRegisteredUsers></NonRegisteredUsers>
                <RegisteredUsers></RegisteredUsers>
            </ul>
        </div>
    </nav>
);

export default NavigationBar;