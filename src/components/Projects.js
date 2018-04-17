import React, { Component } from 'react'
import Project from './Project'

export default class Projects extends Component {
    state = {
        project1: {
            title: "About Me",
            time: "April 10, 2018",
            technology: "React JS",
            description: "In this project we are using css and jsx in react to build a personal profile."
        },
        project2: {
            title: "My Name Badge",
            time: "March 19, 2018",
            technology: "CSS",
            description: "In this project we used CSS to format a welcome name badge."
        }

    }

    constructor() {
        super()
        console.log('Projects.constructor()')
    }

    componentWillMount() {
        console.log('Projects.componentWillMount()')
    }

    render() {
        console.log('Projects.render()')
        return (
            <div>
                <div class='Projects'>
                    <header>Projects</header>
                </div>

                <div class='Projectsbody'>
                    <div>
                        <Project title={this.state.project1.title} time={this.state.project1.time} technoogy={this.state.project1.technology} description={this.state.project1.description} />
                    </div>
                    <div>
                        <Project title={this.state.project2.title} time={this.state.project2.time} technoogy={this.state.project2.technology} description={this.state.project2.description} />
                    </div>
                </div>

                <div class='homeFooter'>
                    <footer>

                    </footer>
                </div>

            </div>
        )
    }

    componentDidMount() {
        console.log('Projects.componentDidMount()')
    }

}