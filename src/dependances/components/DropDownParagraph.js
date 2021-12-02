import React, { Component } from 'react';
import arrow from "../assets/arrow.png"
class DropDownParagraph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.data?.title,
            textData: this.props.data?.description,
        }
        this.dropdownContentParagraph = React.createRef()
        this.arrowPicture = React.createRef()
    }

    toggleDropDown = () => {
        const dropdown = this.dropdownContentParagraph.current
        const arrow = this.arrowPicture.current
        if (dropdown.classList.contains('collapse')) {
            dropdown.classList.remove('collapse')
            arrow.style.transform = 'rotate(0deg)'
        }
        else {
            dropdown.classList.add('collapse')
            arrow.style.transform = 'rotate(180deg)'
        }
    }
    timeout(ms) { // fonction de temporisation
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    render() {
        return (
            <div className="dropdown">
                <div className="dropdown-header dropdown-header-paragraph" >
                    <p>{this.state.title}</p>
                    <img src={arrow} alt="fléche" onClick={this.toggleDropDown} ref={this.arrowPicture} />
                </div>
                <div className="dropdown-content dropdown-content-paragraph collapse" ref={this.dropdownContentParagraph}>
                    <p>{this.state.textData}</p>
                </div>
            </div>
        );
    }
}

export default DropDownParagraph;
