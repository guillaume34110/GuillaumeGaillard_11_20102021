import React, { Component } from 'react';
import APropospicture from '../components/AProposPicture';
import Dropdown from '../components/Dropdown';
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
                      < Dropdown key={index} data={data.content} title={data.title} maxiWidth={true} unCollapse ={data.unCollapse}/>
                 ))
                     }
                 <Footer />
            </div>
        );
    }
}

export default APropos;
