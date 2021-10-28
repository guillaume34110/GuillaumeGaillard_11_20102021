import React, { Component } from 'react';
import arrow from "../assets/arrow.png"
class DropDownParagraph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : this.props.data.title,
            textData: this.props.data.description,
            
        }
    }
    render() {
        return (
            <div className="dropdown-paragraph">
                <div className="dropdown-header">
                    <p>{this.state.title}</p>
                    <img src = {arrow} alt = "fléche" />
                </div>
                <div className="dropdown-content">
                    <p>{this.state.textData}</p>
                </div>
            </div>
        );
    }
}

export default DropDownParagraph;
