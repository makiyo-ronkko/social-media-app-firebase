import React, { Component } from "react";
import PostSummary from './PostSummary';
import Firebase from 'firebase';

class AllPosts extends Component {
    state = { post: null }

    componentDidMount = () => {
        Firebase.firestore().collection('posts').get()
            .then(resp => {
                this.setState({
                    posts: resp.docs
                })
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    render() {
        return (
            <div className="container" >
                {
                    this.state.posts ? this.state.posts.map(post =>
                        <PostSummary post={post.data()} key={post.id} />) : 'Loading...'
                }


            </div>
        );
    }
}


export default AllPosts;