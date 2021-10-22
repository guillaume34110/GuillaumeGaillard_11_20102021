import React, { Component } from 'react';
import Header from '../components/Header';
import Headerpicture from '../components/HeaderPicture';
import Thumb from '../components/Thumb';
import { datas } from '../database/datas';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        
}
    componentDidMount(){
        this.datas = datas//pour faire comme si c'était un appel j'aurais pu le déclarer au début
    }

    render() {
        return (
            <div>
               <Header />
               <Headerpicture  />
               <Thumb props = {this.datas}/>
            </div>
        );
    }
}

export default Home;
