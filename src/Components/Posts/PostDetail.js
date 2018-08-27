import React, { Component } from 'react';
import PostAPI from './postAPI';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postDetail: [],
            modal: true
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
        this.props.history.goBack();
    }

    componentDidMount () {
        const postId = parseInt(this.props.match.params.id, 10);
        PostAPI.get(postId).then(res => {
            this.setState({
                postDetail: res.data
            })
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.postDetail ? 
                        // <div>
                        //     Id: {this.state.postDetail.id}
                        //     <br/>
                        //     Title: {this.state.postDetail.title}
                        //     <br/>
                        //     Description: {this.state.postDetail.body}
                        // </div>
                        <div>
                            {/* <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}Read More</Button> */}
                            <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>{this.state.postDetail.title}</ModalHeader>
                            <ModalBody>{this.state.postDetail.body}</ModalBody>
                            </Modal>
                        </div>
                    : 'Post not found'
                }
            </div>
        );
    }
}

export default PostDetail;