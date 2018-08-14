import React, { Component } from 'react';
import PostAPI from './postAPI';

class PostDetail extends Component {
    constructor() {
        super();
        this.state = {
            postDetail: []
        }
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
                        <div>
                            Id: {this.state.postDetail.id}
                            <br/>
                            Title: {this.state.postDetail.title}
                            <br/>
                            Description: {this.state.postDetail.body}
                        </div>
                    : 'Post not found'
                }
            </div>
        );
    }
}

export default PostDetail;