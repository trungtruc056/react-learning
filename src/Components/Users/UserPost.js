import React, { Component } from 'react';
import { Card, CardHeader, CardBody,
    CardTitle, CardText, Button } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';

class UserPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

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
                            {/* <div>
                                <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}Read More</Button>
                                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>{this.props.usp.title}</ModalHeader>
                                <ModalBody>{this.props.usp.body}</ModalBody>
                                </Modal>
                            </div> */}
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

export default withRouter(UserPost);