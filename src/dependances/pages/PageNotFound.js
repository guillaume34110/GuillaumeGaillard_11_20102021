import React, { Component } from 'react';
import Header from '../components/Header';
import { withRouter } from 'react-router';
import Footer from '../components/Footer';

class Pagenotfound extends Component {
    render() {
        const redirect = (e) => {
           
        this.props.history.push('/') 
    }
        return (
            <div className=" main">
                <Header />
                <div className="page-not-found">
                <div>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                </div>
                <p onClick = {redirect}>Retourner sur la page d'acceuil</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Pagenotfound);
