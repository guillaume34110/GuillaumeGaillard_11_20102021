import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Logo from './Logo';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
        
}
    componentDidMount() {
        if (this.props.history.location.pathname === "/") document.querySelector(".header-acceuil").classList.add('underline')
        else if(this.props.history.location.pathname === "/apropos") document.querySelector(".header-apropos").classList.add('underline')
        else if(this.props.history.location.pathname !== "/apropos" && window.innerWidth < 800) document.querySelector(".header-acceuil").classList.add('underline')
    }
   
    render() {
        const  homeRoute = () => {
        this.props.history.push('/') 
    }
    const aProposRoute = ()=>{
        this.props.history.push('/apropos') 
    }
        return (
            <div className = "header">
                <Logo />
                <div>
                <p className = "header-acceuil" onClick ={homeRoute}>Acceuil</p>
                <p className = "header-apropos" onClick ={aProposRoute}>A Propos</p>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
