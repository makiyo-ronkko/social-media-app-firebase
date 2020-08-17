import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Firebase from 'firebase';

class RegisteredUsers extends Component {
    logOut = () => {
        Firebase.auth().signOut()
            .then(resp => {
                console.log('User has been logged out');
            }).catch(err => {
                console.log('Some error has occurred while logging out');
            });
    }
    render() {
        return (
            <div>
                <li><NavLink to="/create">New Post</NavLink></li>
                <li><NavLink to="/logout" onClick={this.logOut}>Logout</NavLink></li>
            </div >
        )
    }
}

export default RegisteredUsers;