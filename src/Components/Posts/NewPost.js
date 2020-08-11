import React, { useState } from "react";
//import axios from 'axios';

const NewPost = () => {

    const [newPost, setNewPost] = useState({
        title: "",
        content: ""
    });

    const changeHandler = e => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        });
    }
    const addPostHandler = e => {
        e.preventDefault();
        setNewPost({ ...newPost, [e.target.name]: e.target.value });
    }


    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="container">
                    <div className="row">
                        <form className="col s12" onClick={addPostHandler}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="title" type="text" className="validate" placeholder="Title" onChange={changeHandler} />
                                    <label htmlFor="title" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="content" className="materialize-textarea" placeholder="Content" data-length="500" onChange={changeHandler}></textarea >
                                    <label htmlFor="content" />
                                </div>
                            </div>
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPost;
