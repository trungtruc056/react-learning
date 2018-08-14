import React, { Component } from 'react';
import UserAPI from './userAPI';
import UserBlock from './UserBlock';
import { Container, Row, Col } from 'reactstrap';
import './Users.css';

class UserList extends Component {
    constructor() {
        super();
        this.state = {
            userList: []
        }
    }
    componentDidMount() {
        UserAPI.getLimit().then((res) => {
            this.setState({
                userList: res.data
            })
        })
    }
    render() {
        return (
            <Container>
                <Row>
                    {
                        this.state.userList.map(u => (
                        <Col md="4" className="mb-30" key={u.id}>
                            <UserBlock item={u}/>
                        </Col>
                        ))
                    }
                </Row>
            </Container>
        );
    }
}

export default UserList;