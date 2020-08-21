import React, { Component } from 'react';

class PostSummary extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card post" style={{ width: '400px' }}>
                        <div className="card-title" style={{ margin: '20px 0 0 20px' }}>{this.props.post.title}</div>
                        {/* <div className="card-title" style={{ margin: '20px 0 0 20px' }}>{props.post.title}</div> */}
                        <div className="card-content">
                            <p>{this.props.post.content}</p>
                            {/* <p>{props.post.content}</p>
                        <p>{props.post.time.toString()}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default PostSummary;