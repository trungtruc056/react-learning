import React, { Component } from 'react';
import './Sidebar.css';
import Menu from '../Menu/Menu';

class Sidebar extends Component {
    render() {
        return (
            <div className="side-bar">
                <h1>Menu Sidebar</h1>
                <Menu />
            </div>
        );
    }
}

export default Sidebar;