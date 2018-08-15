import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        return (
            <div>
                {
                    this.props.user ?
                        <div>
                            Id: {this.props.user.id}
                            <br/>
                            Name: {this.props.user.name}
                            <br/>
                            Email: {this.props.user.email}
                        </div>
                    : 'User not found'
                }
            </div>
        );
    }
}

export default UserInfo;