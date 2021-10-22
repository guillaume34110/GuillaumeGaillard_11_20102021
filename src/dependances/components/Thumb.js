import React, { Component } from 'react';

class Thumb extends Component {
    constructor(props) {
        super(props)
        this.state = {
           datas : props.datas,
        }
    }
    
    render() {
        return (
            <div className ="thumbs">
                <ul className ="thumbs-list">
                {this.datas.map((thumb,index) => (
                    <li className="thumb" key={index} >
                        <img src = {thumb.cover} alt ={thumb.title} />
                        <p>{thumb.title}</p>
                        </li>
                     ))}
                </ul>
            </div>
        );
    }
}

export default Thumb;
