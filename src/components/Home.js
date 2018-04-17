import React, { Component } from 'react'
import AboutMe from './AboutMe'

export default class Home extends Component {
    constructor() {
        super()
        console.log('Home.constructor()')
    }

    componentWillMount() {
        console.log('Home.componentWillMount()')
    }

    render() {
        console.log('Home.render()')
        return (
            <div>
                <AboutMe />
            <div>
                <div className='Nameclass'>
                    Chaun Cook
                </div>

                <div class='AppBio'>
                    <header>
                        <h1>Bio</h1>
                   </header>
                    <p>I am 28 Years of age i attended Jordan High School and graduated in 2008. I am married to Ashley Cook and we have 2 beautiful children, 
                        our oldest Addison Jade is 8 and Sadie Anne is 2 years old. Both of my girls are very energetic and creative they enjoy playing dress up together
                        and any activity that includes being outside. Addison is currently playing soccer for the second year and would like to try playng softball this summer.
                        Sadie has many interest but her favorite would have to be anything her big sister is doing. As you can see my bio is pretty simple everything revolves 
                        around my wife and 2 girls. My personal interests would have to be anything to do with sports i am still active in playing Basketball every Saturday
                        and playing in rec leagues when i have the time. I am also the offensive coach for the 7/8 grade Bingham lacross team i have no prior playing experiance, 
                        but this is my 3rd year coaching. My two favorite sports would have to be basketball #1 and Football #2 as those were the two sports i played growing up 
                        and in high school. </p>
                </div>

                <div class='TechInterest'>
                    <header>
                        <h1>Tech Interest and Skills</h1>
                        </header>
                    <ul>
                        <li>Web Development</li>
                        <li>IT Support</li>
                        <li>Design</li>
                        <li>Git hub</li>
                        <li>Git</li>
                        </ul>
                </div>

<div class='homeFooter'>
    <footer>
        
    </footer>
    </div>

            </div>
            </div>
        )
    }

    componentDidMount() {
        console.log('Home.componentDidMount()')
    }
}