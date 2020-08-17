import React, { Component } from 'react';
import Firebase from 'firebase';
//const db = Firebase.firestore();

class Register extends Component {

    state = {
        email: null,
        password: null,
        firstname: null,
        lstanem: null,
        phone: null
    }

    handleChange = (e) => {
        // console.log(this);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmission = (e) => {
        e.preventDefault();
        //const scope=this;
        console.log(this.state);//this is an instance of Login object

        Firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).then((resp) => {
            Firebase.firestore().collection('users').doc(resp.user.uid).set({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                phone: this.state.phone
            }).then(() => {
                console.log('Registration success');
                console.log(resp.user.uid)
            })
        }).catch(err => {
            console.log('Login failed: ' + err)
        });
    }


    render() {
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="container">
                        <form className="col s12" onSubmit={this.handleSubmission.bind(this)}>

                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="firstname" type="text" className="validate" placeholder="First Name" onChange={this.handleChange.bind(this)} />
                                    <label htmlFor="first_name" />
                                </div>
                                <div className="input-field col s6">
                                    <input id="lastname" type="text" className="validate" placeholder="Last Name" onChange={this.handleChange.bind(this)} />
                                    <label htmlFor="last_name" />
                                </div>

                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" placeholder="Email" onChange={this.handleChange.bind(this)} />
                                    <label htmlFor="email" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="phone" type="text" className="validate" placeholder="Phone Number" onChange={this.handleChange.bind(this)} />
                                    <label htmlFor="phone" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" placeholder="Password" onChange={this.handleChange.bind(this)} />
                                    <label htmlFor="password" />
                                </div>
                            </div>
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;