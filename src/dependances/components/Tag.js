import React, { Component } from 'react';

class Tag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tagNames : props.tagNames
        }
    }
    componentDidUpdate() {
        if (this.state.tagNames !== this.props.tagNames) this.setState({ tagNames: this.props.tagNames})
    }
    render() {
        return (
            <div className="tags">
                <ul className="tags-list">
                {this.state.tagNames && this.state.tagNames.map((tag,index) => (
                    <li className="tag" key={index} >{tag}</li>
                     ))}
                </ul>
            </div>
        );
    }
}

export default Tag;
