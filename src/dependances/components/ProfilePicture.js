import React, { Component } from 'react';

class Profilepicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            host : props.host,
            firstName : null,
            lastName : null
        }
    }
    componentDidMount(){
        console.log(this.state.host.name,"name")
        let newName = this.state.host.name.split(/([^\s]+)/)
        console.log(newName,"name2")
        this.setState({firstName :newName[1] })
        this.setState({lastName :newName[3] })
    }
    render() {
        return (
            <div className="profile-picture">
                <div className="profile-name">
                <p>{this.state.firstName} </p>
                <p>{this.state.lastName} </p>
                </div>
                <img src ={this.state.host.picture} alt = " photo de profil"/>
               
            </div>
        );
    }
}

export default Profilepicture;
