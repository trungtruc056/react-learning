import React, { Component } from 'react';
import UserInfo from './UserInfo';
import UserPost from './UserPost';
import UserAPI from './userAPI';
import PostAPI from './../Posts/postAPI';
import { Container, Row, Col } from 'reactstrap';
import './Users.css';

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
        })
    }
    render() {
        return (
            <Container>
                    <Col md="12" className="mb-85">
                        <div className="user-info">
                            {
                                this.state.userDetail ?
                                    <UserInfo user={this.state.userDetail} />
                                : 'User not found'

                            }
                        </div>
                    </Col>
                    
                    <div className="user-post">
                    {console.log(this.state.userDetail.userId)}
                    <h1 className="text-center mb-30">Post of User</h1>
                        {
                            this.state.userPost ?
                                <Row>
                                {
                                    this.state.userPost.map(item => (
                                        <Col md="4" className="mb-30" key={item.id}>
                                            <UserPost usp={item} />
                                        </Col>
                                    ))
                                }
                                </Row>
                            : 'User not have post'

                        }
                    </div>
                    
            </Container>
        );
    }
}

export default UserDetail;