import React, { Component } from 'react';
import fullStar from "../assets/stars/full-stars.png"
import emptyStar from "../assets/stars/empty-stars.png"
class Stars extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starsNumber: props.starsNumber,
            stars: []

        }
    }
    componentDidMount() { // confection et remplissage des étoiles
        for (let i = 0; i < 5; i++) {
            if (parseInt(this.state.starsNumber) > i) {
                let starsBuffer = this.state.stars
                starsBuffer[i] = fullStar
                this.setState({ stars: starsBuffer })
            } else {
                let starsBuffer = this.state.stars
                starsBuffer[i] = emptyStar
                this.setState({ stars: starsBuffer })
            }
        }
    }
    render() {

        return (
            <div className="stars">
                <img src={this.state.stars[0]} alt="étoile" />
                <img src={this.state.stars[1]} alt="étoile" />
                <img src={this.state.stars[2]} alt="étoile" />
                <img src={this.state.stars[3]} alt="étoile" />
                <img src={this.state.stars[4]} alt="étoile" />
            </div>
        );
    }
}

export default Stars;
