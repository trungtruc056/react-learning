import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Users/Users.css';

class PostBlock extends Component {
    render() {
        return (
            <Card>
                <CardHeader>Post ID: {this.props.item.id}</CardHeader>
                <CardBody>
                <CardTitle>{this.props.item.title.substring(0, 25)+'...'}</CardTitle>
                <CardText>{this.props.item.body.substring(0,100)+'...'}</CardText>
                <Button className="viewProfile">
                    <Link to={`/posts/${this.props.item.id}`}>
                        Read More
                    </Link>
                </Button>
                </CardBody>
            </Card>
        );
    }
}

export default PostBlock;