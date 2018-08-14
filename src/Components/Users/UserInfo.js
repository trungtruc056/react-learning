import React, { Component } from 'react';
import UserAPI from './userAPI';

class UserInfo extends Component {
    constructor() {
        super();
        this.state = {
            userDetail: []
        }
    }
    componentDidMount() {
        const userId = parseInt(this.props.match.params.id, 10);
        UserAPI.get(userId).then((res) => {
            this.setState({
                userDetail: res.data
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.userDetail ?
                        <div>
                            Id: {this.state.userDetail.id}
                            <br/>
                            Name: {this.state.userDetail.name}
                            <br/>
                            Email: {this.state.userDetail.email}
                        </div>
                    : 'User not found'
                }
            </div>
        );
    }
}

export default UserInfo;