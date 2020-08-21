import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //posted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleChange = (e) => {
    console.log(this);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmission = (e) => {
    e.preventDefault();
    this.props.createPost({
      title: this.state.title, //postTitle
      content: this.state.content, //postContent
    });

    // Firebase.firestore().collection('posts').add({
    //     title: this.state.title,
    //     content: this.state.content,
    //     time: new Date(),
    //     user: Firebase.auth().currentUser.uid
    // }).then(() => {
    //     this.setState({
    //         posted: true
    //     })
    // })
  };

  render() {
    return (
      <div className='row'>
        <div className='col s12 m6'>
          <div className='container'>
            {/* {this.state.posted ? <Redirect to='/' /> : ''}
            {!this.props.uid ? (
              <Redirect to='/login' />
            ) : ( */}
            <div className='row'>
              <form onSubmit={this.handleSubmission}>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      id='title'
                      type='text'
                      className='validate'
                      placeholder='Title'
                      onChange={this.handleChange}
                    />
                    <label htmlFor='title' />
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <textarea
                      id='content'
                      className='materialize-textarea'
                      placeholder='Content'
                      data-length='500'
                      onChange={this.handleChange}
                    ></textarea>
                    <label htmlFor='content' />
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
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//     return {

//     }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    // createPost on handleSubmission
    createPost: (post) => dispatch(createPost(post)), // createPost
    // return dispatch({
    //     type: 'CREATE_NEW_POST',
    //     post: post
    // });// createPost
  };
};

export default connect(null, mapDispatchToProps)(NewPost);
