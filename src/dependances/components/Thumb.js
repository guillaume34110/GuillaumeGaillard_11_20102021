import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';




class Thumb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
        
}
    render() {
       
        return (
            <div className ="thumbs">
                <ul className ="thumbs-list">
                {this.props.datas && this.props.datas.map((thumb,index) => (
                    <Link to={"/fiche-logement/" + thumb.id}  key={index} style={{ textDecoration: 'none' }}>
                    <li className="thumb" key={index} data-data = {thumb.id} >
                        <img  data-data = {thumb.id} src = {thumb.cover} alt ={thumb.title} />
                        <p data-data = {thumb.id}> {thumb.title}</p>
                        </li>
                        </Link>
                     ))}
                </ul>
            </div>
        );
    }
}

export default withRouter(Thumb);
