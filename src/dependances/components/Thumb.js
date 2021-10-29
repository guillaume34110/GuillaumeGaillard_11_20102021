import React, { Component } from 'react';
import { withRouter } from 'react-router';
import App from '../../App';



class Thumb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
        
}
    

    render() {
        const redirect = (e) => {
            this.props.datas.forEach(thumb => {
                if(thumb.id === e.target.dataset.data) this.props.setData(thumb)
            });
        this.props.history.push('/fiche-logement') 
    }
        return (
            <div className ="thumbs">
                <ul className ="thumbs-list">
                {this.props.datas && this.props.datas.map((thumb,index) => (
                    <li className="thumb" key={index} data-data = {thumb.id} onClick = {redirect}>
                        <img data-data = {thumb.id} src = {thumb.cover} alt ={thumb.title} />
                        <p data-data = {thumb.id}> {thumb.title}</p>
                        </li>
                     ))}
                </ul>
            </div>
        );
    }
}

export default withRouter(Thumb);
