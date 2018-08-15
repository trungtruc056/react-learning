import React, { Component } from 'react';

class UserPost extends Component {
    render() {
        return (
            <div>
                {
                    this.props.usp ?
                        <div>
                            Id: {this.props.usp.id}
                            <br/>
                            Title: {this.props.usp.title}
                            <br/>
                            Description: {this.props.usp.body}
                        </div>
                    : 'User not have Post'
                }
            </div>
        );
    }
}

export default UserPost;