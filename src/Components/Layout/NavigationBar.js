import React, { Component } from 'react'
import Logo from './Logo';
import NonRegisteredUsers from './NonRegisteredUsers';
import RegisteredUsers from './RegisteredUsers';

class NavigationBar extends Component {
    render() {
        return (
            <nav className="nav-wrapper" >
                <div className="container">
                    <Logo />
                    {
                        this.props.uid ?
                            <ul className="right">
                                <RegisteredUsers></RegisteredUsers>
                            </ul> :
                            <ul className="right">
                                <NonRegisteredUsers></NonRegisteredUsers>
                            </ul>
                    }
                </div>
            </nav>
        )
    }
};

export default NavigationBar;