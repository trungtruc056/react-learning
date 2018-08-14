import React, { Component } from 'react'
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class ArticleAPI extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })

            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
            .then(responseImg => {
                this.setState({
                    postsImg: responseImg.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render () {

        return (
            <div>
                {
                    this.state.posts.map((post, index) =>
                        <div key={index} className="col-md-6 item-block">
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>{post.title}</CardTitle>
                                <CardText>{post.body}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    )

                }
            </div>
        )
    }
}

export default ArticleAPI