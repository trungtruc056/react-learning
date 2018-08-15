import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

class UserPost extends Component {
    render() {
        return (
            <div>
                {
                    this.props.usp ?
                        <Card>
                            <CardHeader>Post ID: {this.props.usp.id}</CardHeader>
                            <CardBody>
                            <CardTitle>{this.props.usp.title.substring(0, 25)+'...'}</CardTitle>
                            <CardText>{this.props.usp.body.substring(0,100)+'...'}</CardText>
                            <Button className="viewProfile">
                                <Link to={`/posts/${this.props.usp.id}`}>
                                    Read More
                                </Link>
                            </Button>
                            </CardBody>
                        </Card>
                    : 'User not have Post'
                }
            </div>
        );
    }
}

export default UserPost;