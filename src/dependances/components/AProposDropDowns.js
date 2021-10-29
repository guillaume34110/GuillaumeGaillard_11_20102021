import React, { Component } from 'react';
import { aProposData } from "../database/aProposData"
import arrow from "../assets/arrow.png"
class AProposDropDowns extends Component {

    async componentDidMount() {
      
        const dropdown = document.querySelector(`.dropdown-content-${aProposData[this.props.token].title}`)
        const arrow = document.querySelector(`.dropdown-${aProposData[this.props.token].title} img`)
        dropdown.style.transition = "0s "
        arrow.style.transition = "0s"
        if (this.props.token !== 2) this.toggleDropDown()
        await this.timeout(50)
        dropdown.style.transition = "1s linear"
        arrow.style.transition = "1s ease"
    }
    toggleDropDown = () => {
        const dropdown = document.querySelector(`.dropdown-content-${aProposData[this.props.token].title}`)
        const arrow = document.querySelector(`.dropdown-${aProposData[this.props.token].title} img`)
        if (dropdown.classList.contains('collapse')) {
            dropdown.classList.remove('collapse')
            arrow.style.transform = 'rotate(0deg)'
        }
        else {
            dropdown.classList.add('collapse')
            arrow.style.transform = 'rotate(180deg)'
        }
    }
    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    render() {

        return (


            <div className={"dropdown-maxi dropdown-" + aProposData[this.props.token].title}>
                <div className="dropdown-header">
                    <p>{aProposData[this.props.token].title}</p>
                    <img src={arrow} alt="fléche" onClick={this.toggleDropDown} />
                </div>
                <div className={"dropdown-content dropdown-content-" + aProposData[this.props.token].title}>
                    <p>{aProposData[this.props.token].content}</p>
                </div>
            </div>

        );
    }
}

export default AProposDropDowns;
