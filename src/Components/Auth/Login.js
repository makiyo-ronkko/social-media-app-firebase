import React from 'react';
import Firebase from 'firebase';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null
        };

        this.handleSubmission = this.handleSubmission.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) => {
        // console.log(this);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmission = (e) => {
        e.preventDefault();
        console.log(this.state);//this is an instance of Login object

        Firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).then(() => {
            console.log('Login success');
        }).catch(err => {
            console.log('Login failed: ' + err)
        });
    }

    render() {
        return (
            <div className="row" >
                <div className="col s12 m6">
                    <div className="container">
                        <form className="col s12" onSubmit={this.handleSubmission}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" placeholder="Email" onChange={this.handleChange} />
                                    <label htmlFor="email" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" onChange={this.handleChange} />
                                    <label htmlFor="password">Password</label>
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

export default Login;