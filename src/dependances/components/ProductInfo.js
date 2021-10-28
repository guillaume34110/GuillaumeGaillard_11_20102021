import Tag from './Tag.js'
import React, { Component } from 'react';
import Profilepicture from './ProfilePicture.js';
import Stars from './Stars.js';

class Productinfo extends Component {
    render() {
        return (
            <section className = "product-info">
                <div className = "product-description">
                <h1>{this.props.data?.title}</h1>
                <p className = "product-location">{this.props.data?.location}</p>
                <Tag tagNames = {this.props.data?.tags}/>
                
                </div>
                <div className = "product-profile">
                    <Profilepicture host = {this.props.data?.host}/>
                    <Stars starsNumber = {this.props.data?.rating}/>
                </div>
            </section>
        );
    }
}

export default Productinfo;
