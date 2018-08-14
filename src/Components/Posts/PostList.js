import React, { Component } from 'react';
import PostAPI from './postAPI';
import PostBlock from './PostBlock';
import { Container, Row, Col } from 'reactstrap';
import '../Users/Users.css';

class PostList extends Component {
    constructor() {
        super();
        this.state = {
            postList: []
        }
    }
    componentDidMount () {
        PostAPI.getLimit().then((res) => {
            this.setState({
                postList: res.data
            })
        })
    }
    render() {
        return (
            <Container>
                <Row>
                    {
                        this.state.postList.map(p => (
                        <Col md="4" className="mb-30" key={p.id}>
                            <PostBlock item={p}/>
                        </Col>
                        ))
                    }
                </Row>
            </Container>
        );
    }
}

export default PostList;