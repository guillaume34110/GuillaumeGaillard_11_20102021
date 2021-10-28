import React, { Component } from 'react';
import arrow from "../assets/arrow.png"
class DropDownParagraph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : this.props.data?.title,
            textData: this.props.data?.description,
        }
    }
    async componentDidMount() {
        const dropdown = document.querySelector(`.dropdown-content-paragraph`)
        const arrow = document.querySelector(`.dropdown-header-paragraph img`)
        dropdown.style.transition = "0s "
        arrow.style.transition = "0s"
        if(window.innerWidth < 800 ) this.toggleDropDown()
        await this.timeout(50)
        dropdown.style.transition = "1s linear"
        arrow.style.transition = "1s ease"
    }
    toggleDropDown = () => {
            const dropdown = document.querySelector('.dropdown-content-paragraph')
            const arrow = document.querySelector('.dropdown-header-paragraph img')
            if ( dropdown.classList.contains('collapse')){
                 dropdown.classList.remove('collapse')
                 arrow.style.transform = 'rotate(0deg)'
                }
            else  {
                dropdown.classList.add('collapse')
                arrow.style.transform = 'rotate(180deg)'
            }
        }
        timeout(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    render() {

       
        return (
            <div className="dropdown">
                <div className="dropdown-header dropdown-header-paragraph">
                    <p>{this.state.title}</p>
                    <img src = {arrow} alt = "fléche" onClick ={this.toggleDropDown} />
                </div>
                <div className="dropdown-content dropdown-content-paragraph  ">
                    <p>{this.state.textData}</p>
                </div>
            </div>
        );
    }
}

export default DropDownParagraph;
