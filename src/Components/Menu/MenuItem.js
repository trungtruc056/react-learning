import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

class MenuItem extends Component {

    render() {
        return (
            <ul className="navbar-nav ml-auto" id="list-menu">
                <li className="nav-item">
                    <NavLink exact className="nav-link" activeClassName="active" to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to='/users'>Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to='/posts'>Posts</NavLink>
                </li>
            </ul>
        );
    }
}

export default MenuItem;