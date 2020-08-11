import React from 'react';

const Register = () => {
    return (
        <div className="row">
            <div class="col s12 m6">
                <div class="container">
                    <form className="col s12">

                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" placeholder="First Name" />
                                <label for="first_name" />
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" placeholder="Last Name" />
                                <label for="last_name" />
                            </div>

                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" placeholder="Email" />
                                <label for="email" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" placeholder="Password" />
                                <label for="password" />
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;