import React, { Component } from 'react';
import Home from '../Home/Home';
import Users from '../Users/Users';
import Posts from '../Posts/Posts';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/users" component={Users} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </main>
        );
    }
}

export default Main;