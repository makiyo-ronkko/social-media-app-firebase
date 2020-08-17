import React, { Component } from 'react';
import Firebase from 'firebase';

class Logout extends Component {

    handleSubmission = (e) => {
        e.preventDefault();
        Firebase.auth().signOut().then(function () {
            console.log('Logout success');
        }).catch(function (err) {
            console.log('Logout failed: ' + err)
        });
    }
    render() {
        return (
            <div>
                <div className="row" >
                    <div className="col s12 m6">
                        <div className="container">
                            <form className="col s12" onSubmit={this.handleSubmission.bind(this)}>
                                <button className="btn waves-effect waves-light" type="submit" name="action">Logout</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

}

export default Logout;