import React, { Component } from 'react';
//import PostSummary from '../Posts/PostSummary';
import { subscribeToChanges } from '../../store/actions/postActions';
import { connect } from 'react-redux';

class Notifications extends Component {
    componentDidMount = () => {
        this.props.subscribeToChanges();
    }

    render() {
        return (
            <ul className="collapsible">
                {this.props.notifications.map(notification => {
                    return (
                        < li >
                            <div className="collapsible-header">
                                {notification.author} has added a new post
                                <span className="new badge"></span>
                            </div>
                        </li>
                    )
                })
                }
            </ul >
        );
    }

}

const mapStateToProps = state => {
    console.log(state.post.notifications)
    return {
        notifications: state.post.notifications
    }
}

const mapDispatchToProps = dispatch => {
    return {
        subscribeToChanges: () => {
            dispatch(subscribeToChanges())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);