import React, { Component } from 'react';

class Tag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tagNames : props.tagNames,
        }
    }
    render() {
        return (
            <div className="tags-names">
                <ul className="tags-list">
                {this.tagnames.map((tag,index) => (
                    <li className="tag" key={index} >{tag}</li>
                     ))}
                </ul>
            </div>
        );
    }
}

export default Tag;
