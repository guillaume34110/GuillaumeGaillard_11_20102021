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
    componentDidUpdate() { // confection et remplissage des étoiles
        if (this.state.starsNumber !== this.props.starsNumber) {this.setState({starsNumber:this.props.starsNumber})
       let starsBuffer = []
        for (let i = 0; i < 5; i++) {
            if (parseInt(this.props.starsNumber) > i) {
                starsBuffer[i] = fullStar
            } else {
                starsBuffer[i] = emptyStar
            }
        }
        if ( this.state.stars !== starsBuffer )this.setState({ stars: starsBuffer })
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
