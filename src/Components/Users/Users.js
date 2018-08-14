import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './UserList';
import UserDetail from './UserDetail';
import './Users.css';


class Users extends Component {
    render() {
        return (
            <div className="pt-section pb-section">
                <h1 className="pb-heading">Welcome to Users page</h1>
                <Switch>
                    <Route exact path='/users' component={UserList} />
                    <Route path='/users/:id' component={UserDetail} />
                </Switch>
            </div>
        );
    }
}

export default Users;