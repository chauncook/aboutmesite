import React, { Component } from 'react';

export default class Project extends Component {

    render() {
        console.log('Projects.render()')
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.time}</p>
                <p>{this.props.technology}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}