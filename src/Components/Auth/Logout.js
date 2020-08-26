import React, { Component } from 'react';
import { logout } from '../../store/actions/authActions';
import { connect } from 'react-redux';

class Logout extends Component {

    // handleSubmission = (e) => {
    //     e.preventDefault();
    //     Firebase.auth().signOut().then(function () {
    //         console.log('Logout success');
    //     }).catch(function (err) {
    //         console.log('Logout failed: ' + err)
    //     });
    // }
    componentDidMount = () => {
        this.props.logout();
    }
    render() {
        return (
            <div className="container">
                {/* {
                    this.props.uid ?
                        <p>Something is wrong </p> :
                        <p>You have been logged out</p>
                } */}
                {this.props.loginState ?
                    <div>Logout failed</div> :
                    <div>Logout success</div>
                }
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        loginStatus: !state.firebase.auth.isEmpty
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);