import React, { Component } from 'react';
import './Header.css';
import Menu from '../Menu/Menu';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width="150" height="30" alt=""></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <Menu />
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;