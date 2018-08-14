import React, { Component } from 'react';
// import UserInfo from './UserInfo';
// import UserPost from './UserPost';
import UserAPI from './userAPI';

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

export default UserDetail;

// class UserDetail extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome to User Detail</h1>
//                 <h2>User Info</h2>
//                 <UserInfo />
//                 <h2>User Post</h2>
//                 <UserPost />
//             </div>
//         );
//     }
// }

// export default UserDetail;