import React, { Component } from 'react';
import AProposDropDowns from '../components/AProposDropDowns';
import APropospicture from '../components/AProposPicture';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {aProposData} from '../database/aProposData.js'
class APropos extends Component {
    render() {
        return (
            <div className = 'Apropos main'>
                 <Header />
                 <APropospicture />
                 {aProposData.map((data , index) => (
                     <AProposDropDowns key={index} token = {index} />
                 ))
                     }
                 <Footer />
            </div>
        );
    }
}

export default APropos;
