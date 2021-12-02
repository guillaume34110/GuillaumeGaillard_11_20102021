import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Logo from './Logo';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.headerAcceuil = React.createRef()
        this.headerAPropos = React.createRef()
    }
    componentDidMount() { // soulignage de a propos et acceuil selon la page
        if (this.props.history.location.pathname === "/") this.headerAcceuil.current.classList.add('underline')
        else if (this.props.history.location.pathname === "/apropos") this.headerAPropos.current.classList.add('underline')
        else if (this.props.history.location.pathname !== "/apropos" && window.innerWidth < 800) this.headerAcceuil.current.classList.add('underline')
    }

    render() {
        const homeRoute = () => {
            this.props.history.push('/')
        }
        const aProposRoute = () => {
            this.props.history.push('/apropos')
        }
        return (
            <div className="header">
                <Logo />
                <div>
                    <p className="header-acceuil" onClick={homeRoute} ref={this.headerAcceuil}>Acceuil</p>
                    <p className="header-apropos" onClick={aProposRoute} ref={this.headerAPropos}>A Propos</p>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
