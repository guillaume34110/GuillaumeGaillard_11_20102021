import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Productinfo from '../components/ProductInfo';
import ProductPicture from '../components/ProductPicture';

class Fichelogement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            data: {}
        }
        
}
    async componentDidMount(){ // recuperation des nouvelles donées du logement selectioné
        const newDatas =  require('../database/datas.json')
        this.setState({datas : newDatas})
        let redirectionToken = true
        newDatas.forEach(item => {
            if(item.id === this.props.match.params.id) {
                this.setState({data  : item} )
                redirectionToken = false
            }
        });
        if (redirectionToken === true )  this.props.history.push('/not-found') // si la page n'existe pas 
    }
    
    render() {
        return (
            <div className="main">
                <Header />
                <ProductPicture data={this.state.data} />
                <Productinfo data={this.state.data} />
                <div className="dropdowns">
                    < Dropdown data={this.state.data.description} title='Description'  />
                    < Dropdown data={this.state.data.equipments} title='Equipements' />
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Fichelogement);
