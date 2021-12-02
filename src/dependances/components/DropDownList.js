import React, { Component } from 'react';
import arrow from "../assets/arrow.png"
class Dropdownlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : this.props.data?.title,
            list: this.props.data?.equipments,
        }
        this.dropdownContentList = React.createRef()
        this.arrowPicture = React.createRef()
    }
    render() {

        const toggleDropDown = () => {
            const dropdown = this.dropdownContentList.current
            const arrow = this.arrowPicture.current
            if ( dropdown.classList.contains('collapse')) {
                dropdown.classList.remove('collapse')
                arrow.style.transform = 'rotate(0deg)'
            }
            else  {
                dropdown.classList.add('collapse')
            arrow.style.transform = 'rotate(180deg)'
        }
    }

        return (
            <div className="dropdown">
                <div className="dropdown-header dropdown-header-list" >
                    <p>{this.state.title}</p>
                    <img src = {arrow} alt = "fléche" onClick ={toggleDropDown}  ref ={this.arrowPicture}/>
                </div>
                <div className="dropdown-content dropdown-content-list collapse "ref ={this.dropdownContentList}>
                    <ul>{this.state.list && this.state.list.map((equipment,index) => (
                        <li key={index} className="equipement">{equipment}</li>
                    ))}</ul>
                </div>
            </div>
        );
    }
}

export default Dropdownlist;
