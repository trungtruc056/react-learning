import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PostList from '../Posts/PostList';
import PostDetail from '../Posts/PostDetail';
import '../Users/Users.css';

class Posts extends Component {
    render() {
        return (
            <div className="pt-section pb-section">
                <h1 className="pb-heading">Welcome to Posts Page</h1>
                <Switch>
                    <Route exact path='/posts' component={PostList}/>
                    <Route path='/posts/:id' component={PostDetail}/>
                </Switch>
            </div>
        );
    }
}

export default Posts;