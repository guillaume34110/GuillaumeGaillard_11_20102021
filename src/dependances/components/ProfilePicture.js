import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Profilepicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            host: props.host,
            firstName: null,
            lastName: null
        }
    }
    componentDidUpdate() { // decomposition et affichage des nouvelles donné au lancement
        if (this.state.host !== this.props.host) {
            this.setState({ host: this.props.host })
            let newName = this.props.host.name.split(/([^\s]+)/)
            if (this.props.host) {
                this.setState({ firstName: newName[1] })
                this.setState({ lastName: newName[3] })
            }
        }
    }
    render() {
        return (
            <div className="profile-picture">
                <div className="profile-name">
                    <p>{this.state.firstName} </p>
                    <p>{this.state.lastName} </p>
                </div>
                <img src={this.state.host?.picture} alt=" photo de profil" />

            </div>
        );
    }
}

export default withRouter(Profilepicture)
