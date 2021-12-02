import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Profilepicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            host : props.host,
            firstName : null,
            lastName : null
        }
    }
    componentDidMount(){ // decomposition et affichage des nouvelles donné au lancement
        let newName = this.state.host?.name.split(/([^\s]+)/)
        if (this.state.host){
        this.setState({firstName :newName[1] })
        this.setState({lastName :newName[3] })
    }else this.props.history.push('/') // retour a l'acceuil si pas de datas
    }
    render() {
        return (
            <div className="profile-picture">
                <div className="profile-name">
                <p>{this.state.firstName} </p>
                <p>{this.state.lastName} </p>
                </div>
                <img src ={this.state.host?.picture} alt = " photo de profil"/>
               
            </div>
        );
    }
}

export default withRouter(Profilepicture)
