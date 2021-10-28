import React, { Component } from 'react';
import arrow from "../assets/big-arrow.png"
class ProductPicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token : 0
        }
    }

    render() {
       const nextPicture = () => {
           let newValue = this.state.token +1
            if (this.state.token < this.props.data.pictures.length-1) this.setState({token :newValue })
            else this.setState({token :0})
        }
        const previousPicture = () => {
            console.log("set",this.state.token,this.props.data.pictures.length)
            let newValue = this.state.token -1
            if (this.state.token > 0) this.setState({token :newValue})
            else this.setState({token :this.props.data.pictures.length-1})
        }
        return (
            <div className="product-picture">
                <img className = "left-arrow arrow-pic" src = {arrow}  alt = "fléche" onClick = {previousPicture}/>
                <img className ="main-img" src = {this.props.data.pictures[this.state.token]} alt = {this.props.data.title} />
                <img className = "right-arrow arrow-pic"src = {arrow} alt = "fléche" onClick = {nextPicture}/>
            </div>
        );
    }
}

export default ProductPicture;
