import React, { Component } from 'react';
import image from "../assets/home-picture.png"

class Headerpicture extends Component {
  
    render() {
        return (
            <div className="header-picture">
                 <h1>Chez vous, partout et ailleurs</h1>
                <img src ={image} alt ="home page landscape" />
            </div>
        );
    }
}

export default Headerpicture;
