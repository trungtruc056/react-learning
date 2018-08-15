import React, { Component } from 'react';
import './Footer.css';
import Menu from '../Menu/Menu';

class Footer extends Component {
    render() {
        return (
            <footer className="gray-background">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <p className="text-center text-md-left footer-graph">© 2018 Copyright:<a href="https://www.trucvt.me/"><strong> Trucvt.me</strong></a></p>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6 footer-menu">
                            <Menu />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;