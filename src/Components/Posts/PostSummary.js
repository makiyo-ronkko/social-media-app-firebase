import React from 'react';

const PostSummary = (props) => {

    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card post">
                    <div className="card-title" style={{ margin: '20px 0 0 20px' }}>{props.post.title}</div>
                    <div className="card-content">
                        <p>{props.post.content}</p>
                        <p>{props.post.time.toString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default PostSummary;