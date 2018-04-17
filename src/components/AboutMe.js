import React, { Component } from 'react';


class AboutMe extends Component {
    constructor() {
        super()
        console.log('AboutMe.constructor(')
    }

    componentWillMount() {
        console.log('AboutMe.componentWillMount')
    }

    render() {
        console.log('AboutMe.render()')
        return (
            <div className='AppHeader'>
                <header> 
                    <img src="./2018 pic.jpg" alt='car'/>
                    About Me 
                    </header>

            </div>


        )
    }

    componentDidMount() {
        console.log('AboutMe.componentDidMount')

    }
}

export default AboutMe