import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Headerpicture from '../components/HeaderPicture';
import Thumb from '../components/Thumb';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
        }
        
}
 async componentDidMount(){//pour faire comme si c'était un appel j'aurais pu le déclarer au début
        const newDatas =  require('../database/datas.json')
        this.setState({datas : newDatas})// utiliastion du setState pour que le rendu du changement soit effectué
        console.log(this.state.datas)
    }

    render() {
        return (
            <div className = "main">
               <Header />
               <Headerpicture  />
               <Thumb datas = {this.state.datas} setData = {this.props.setData}/>
               <Footer />
            </div>
        );
    }
}

export default Home;

