import React from 'react';
import AllPosts from '../Posts/AllPosts';
import { Redirect } from 'react-router-dom';
import Notifications from './Notifications';

const Feeds = (props) => {
    return (
        <div className="container">
            <Notifications />
            {props.uid ? <AllPosts /> : <Redirect to="/login" />}
        </div>
    );
}

export default Feeds;