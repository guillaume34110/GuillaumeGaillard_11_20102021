import React, { Component } from 'react';
import DropDownParagraph from '../components/DropDownParagraph';
import Header from '../components/Header';
import Productinfo from '../components/ProductInfo';
import ProductPicture from '../components/ProductPicture';

class Fichelogement extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <ProductPicture data = {this.props.data}/>
                <Productinfo data = {this.props.data}/>
                <DropDownParagraph data = {this.props.data}/>
            </div>
        );
    }
}

export default Fichelogement;
