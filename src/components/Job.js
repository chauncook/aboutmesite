import React, { Component } from 'react';

export default class Jobs extends Component {

    render() {
        console.log('JobHistory.render()')
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.time}</p>
                <p>{this.props.description}</p>
            </div>
        )
        }
}
