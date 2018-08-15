import React, { Component } from 'react';

class UserPost extends Component {
    render() {
        return (
            <div>
                {
                    this.props.user ?
                        <div>
                            Id: {this.props.user.id}
                            <br/>
                            Title: {this.props.user.title}
                            <br/>
                            Description: {this.props.user.body}
                        </div>
                    : 'User not have Post'
                }
            </div>
        );
    }
}

export default UserPost;