import React, { Component } from 'react';
import UserInfo from './UserInfo';
import UserPost from './UserPost';
import UserAPI from './userAPI';
import PostAPI from './../Posts/postAPI';

class UserDetail extends Component {
    constructor() {
        super();
        this.state = {
            userDetail: [],
            userPost: []
        }
    }
    componentDidMount() {
        const userId = parseInt(this.props.match.params.id, 10);
        UserAPI.get(userId).then((res) => {
            this.setState({
                userDetail: res.data
            })
        });

        PostAPI.getWithUser(userId).then((res) => {
            this.setState({
                userPost: res.data
            })
            console.log(res.data);
        })
    }

    render() {
        return (
            <div className="user-detail">
                <div className="user-info">
                    {
                        this.state.userDetail ?
                            <UserInfo user={this.state.userDetail} />
                        : 'User not found'

                    }
                </div>
                <div className="user-post">
                <h1>User Posts</h1>
                    {
                        this.state.userPost ?
                            <UserPost user={this.state.userPost} />
                        : 'User not have post'
                    }
                </div>
            </div>
        );
    }
}

export default UserDetail;