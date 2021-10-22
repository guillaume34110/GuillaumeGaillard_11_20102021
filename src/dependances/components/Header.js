import React, { Component } from 'react';
import Logo from './Logo';

class Header extends Component {
    render() {
        return (
            <div className = "header">
                <Logo />
                <div>
                <a>Acceuil</a>
                <a>A Propos</a>
                </div>
            </div>
        );
    }
}

export default Header;
