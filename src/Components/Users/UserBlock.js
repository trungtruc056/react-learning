import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Users.css';

class UserBlock extends Component {
    render() {
        return (
            <Card>
                <CardHeader>User ID: {this.props.item.id}</CardHeader>
                <CardBody>
                <CardTitle>{this.props.item.name}</CardTitle>
                <CardText>Email: {this.props.item.email}</CardText>
                <CardText>Phone: {this.props.item.phone}</CardText>
                <Button className="viewProfile">
                    <Link to={`/users/${this.props.item.id}`}>
                        View Profile
                    </Link>
                </Button>
                </CardBody>
            </Card>
        );
    }
}

export default UserBlock;