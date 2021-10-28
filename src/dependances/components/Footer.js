import React, { Component } from 'react';
import logo from '../assets/logo/logo-white.png'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <img src = {logo} alt = " logo kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        );
    }
}

export default Footer;
