import React, { Component } from 'react';
import PostSummary from './PostSummary';
import { removePosts, fetchPosts } from '../../store/actions/postActions';
import { connect } from 'react-redux';
import Firebase from 'firebase';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class AllPosts extends Component {
  //state = { post: null }

  // componentDidMount = () => {
  //   Firebase.firestore().collection('posts').get()
  //     .then(resp => {
  //       this.setState({
  //         posts: resp.docs
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //     });
  // }

  componentDidMount = () => {
    this.props.fetchPosts();
  }

  render() {
    console.log('Received a state from reducer');
    console.log(this.props.posts);

    return (
      <div className='container'>
        <button className='btn' onClick={this.props.removePost}>
          Remove all posts
        </button>
        {this.props.posts.length > 0
          ? this.props.posts.map((post) => ( // posts = state.post.posts = resp.docs + .data()
            <PostSummary post={post.data()} key={Math.random() * 99} />
          ))
          : 'Loading...'}
      </div>
      // <div className="container" >
      //     {
      //         this.state.posts ? this.state.posts.map(post =>
      //             <PostSummary post={post.data()} key={post.id} />) : 'Loading...'
      //     }
      // </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // posts: state.posts, //[]
    posts: state.post.posts, //[]
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removePost: () => {
      // dispatch({ type: 'REMOVE_ALL_POST' });
      dispatch(removePosts());
    },
    fetchPosts: () => {
      dispatch(fetchPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
