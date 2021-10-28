import React, { Component } from 'react';
import Dropdownlist from '../components/DropDownList';
import DropDownParagraph from '../components/DropDownParagraph';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Productinfo from '../components/ProductInfo';
import ProductPicture from '../components/ProductPicture';

class Fichelogement extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <ProductPicture data={this.props.data} />
                <Productinfo data={this.props.data} />
                <div className="dropdowns">
                    <DropDownParagraph data={this.props.data} />
                    <Dropdownlist data={this.props.data} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Fichelogement;
