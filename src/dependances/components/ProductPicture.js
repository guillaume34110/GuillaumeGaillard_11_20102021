import React, { Component } from 'react';
import arrow from "../assets/big-arrow.png"
class ProductPicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: 0,
            srcPicture : '/'
        }
        this.arrowLeft = React.createRef()
        this.arrowRight = React.createRef()
    }
    componentDidUpdate() {  //au lancement si une seule image on effece les fleches
       
        if (this.props.data?.pictures.length === 1) {
            this.arrowLeft.current.style.display = "none"
            this.arrowRight.current.style.display = "none"
        }
        if(this.state.srcPicture !== this.props.data?.pictures[this.state.token]) this.setState({srcPicture : this.props.data?.pictures[this.state.token]})
    }
    render() {
        const nextPicture = () => { // image suivante
            let newValue = this.state.token + 1
            if (this.state.token < this.props.data.pictures.length - 1) this.setState({ token: newValue })
            else this.setState({ token: 0 })
        }
        const previousPicture = () => { // image précedente
            let newValue = this.state.token - 1
            if (this.state.token > 0) this.setState({ token: newValue })
            else this.setState({ token: this.props.data.pictures.length - 1 })
        }
        return (
            <div className="product-picture">
                <img className="left-arrow arrow-pic" src={arrow} alt="fléche" onClick={previousPicture} ref={this.arrowLeft} />
                <img className="main-img" src={this.state.srcPicture} alt={this.props.data?.title} />
                <img className="right-arrow arrow-pic" src={arrow} alt="fléche" onClick={nextPicture} ref={this.arrowRight} />
            </div>
        );
    }
}

export default ProductPicture;
