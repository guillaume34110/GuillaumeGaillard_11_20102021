import React, { Component } from 'react';
import arrow from "../assets/arrow.png"

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props?.title,
            data: this.props?.data,
            dropdownData: '0',
            unCollapse : this.props?.unCollapse,
            maxiWidth : this.props?.maxiWidth
        }
        this.dropdownContent = React.createRef()
        this.arrowPicture = React.createRef()
        this.dropdownContainer = React.createRef()
    }
    async componentDidUpdate() {//tri des data array ou string
       if (this.state.data !== this.props?.data){
        this.drawDropDown()
       
    }
    }
    async componentDidMount(){//mise a jour des data array ou string
        this.drawDropDown()
    }
     drawDropDown = () => { // mise en place des elements dans le dropdown
        this.setState({title: this.props?.title, data: this.props?.data,unCollapse : this.props?.unCollapse, maxiWidth: this.props.maxiWidth})
        if (typeof this.props.data === 'string') {//pour le type paragraphe
        const newContent = <p>{this.props.data}</p>
            this.setState({dropdownData : newContent})
        }
        else if (typeof this.props.data === 'object'){//pour lr type liste
            const newContent = <ul>{this.props.data && this.props.data.map((equipment,index) => (<li key={index} className="equipement">{equipment}</li>))}</ul>
            this.setState({dropdownData : newContent})
        }
        if (this.props.unCollapse ) {
            this.dropdownContent.current.classList.remove('collapse')
            this.arrowPicture.current.style.transform = 'rotate(0deg)'
        }
        if (this.props.maxiWidth) {// un menu large pour la page a propos 
            this.dropdownContainer.current.classList.remove('dropdown')
            this.dropdownContainer.current.classList.add('dropdown-maxi')
        }
     }
    toggleDropDown = () => {
        const dropdown = this.dropdownContent.current
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
            <div className="dropdown" ref = {this.dropdownContainer}>
                <div className="dropdown-header " >
                    <p>{this.state.title}</p>
                    <img src={arrow} alt="fléche" onClick={this.toggleDropDown} ref={this.arrowPicture} />
                </div>
                <div className="dropdown-content collapse" ref={this.dropdownContent}>
                    {this.state.dropdownData}
                </div>
            </div>
        );
    }
}

export default Dropdown;
