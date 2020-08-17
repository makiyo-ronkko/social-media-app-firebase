import React, { Component } from 'react';

class Logout extends Component {

    // handleSubmission = (e) => {
    //     e.preventDefault();
    //     Firebase.auth().signOut().then(function () {
    //         console.log('Logout success');
    //     }).catch(function (err) {
    //         console.log('Logout failed: ' + err)
    //     });
    // }
    render() {
        return (
            <div className="container">
                {
                    this.props.uid ?
                        <p>Something is wrong </p> :
                        <p>You have been logged out</p>
                }
            </div>
        );
    }

}

export default Logout;