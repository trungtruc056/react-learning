import React, { Component } from 'react';
import './Article.css';
import ArticleAPI from './ArticleAPI';

class Article extends Component {

    render() {
        return (
            <div className="col-md-12">
                <h1 className="pb-15" >Article Title</h1>
                {
                    <ArticleAPI />
                }
            </div>
        );
    }
}

export default Article;