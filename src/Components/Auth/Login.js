import React from 'react';
import Firebase from 'firebase';
import { login } from '../../store/actions/authActions';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      auth: null,
    };

    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    // console.log(this);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmission = (e) => {
    e.preventDefault();
    console.log(this.state); //this is an instance of Login object
    this.props.login(this.state);

    // Firebase.auth()
    //   .signInWithEmailAndPassword(this.state.email, this.state.password)
    //   .then(() => {
    //     console.log('Login success');
    //   })
    //   .catch((err) => {
    //     console.log('Login failed: ' + err);
    //   });
  };

  render() {
    return (
      <div className='row'>
        <div className='col s12 m6'>
          <div className='container'>

            {this.props.loginStatus ? <div>You are now logged in</div> :
              <form className='col s12' onSubmit={this.handleSubmission}>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      id='email'
                      type='email'
                      className='validate'
                      placeholder='Email'
                      onChange={this.handleChange}
                    />
                    <label htmlFor='email' />
                  </div>
                </div>

                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      id='password'
                      type='password'
                      className='validate'
                      onChange={this.handleChange}
                    />
                    <label htmlFor='password'>Password</label>
                  </div>
                </div>

                <button
                  className='btn waves-effect waves-light'
                  type='submit'
                  name='action'
                >
                  Submit
              </button>
              </form>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //loginStatus: state.auth.loginStatus 
    loginStatus: !state.firebase.auth.isEmpty // not empty = loggedin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
