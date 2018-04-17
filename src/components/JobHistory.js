import React, { Component } from 'react'
import Job from './Job'


export default class JobHistory extends Component {
    state = {
        job1: {
            title: "iboats",
            time: "2015-2018",
            description: "dealer service account rep and customer service. I help set our dealers classifieds web page up  and also train them how view thier stats and leads."
        },
        job2: {
            title: "Hunt Electric",
            time: "2012-2015",
            description: "i pulled low voltage cabling from fiberoptics cat6 to cat5. I also had to find cable paths from a power box to the home. the two main projects i worked on was the Colony's and also the ABC studios in Park City. "
        },
        job3: {
            title: "DHL",
            time: "2009-2012",
            description: "i started as the warehouse manager shipping and recieving freight to then moving into an Air Export position. the Air export position duties included entering the shipments we recieved into a manifest and finding flights to transport the goods. "
        }

    }
    constructor() {
        super()
        console.log('JobHistory.constructor()')
    }

    componentWillMount() {
        console.log('JobHistory.componentWillMount()')
    }

    render() {
        console.log('JobHistory.render()')
        return (
            <div>
                <div class='jobHistory'>
                    <header>Job History</header>
                </div>

                <div class='jobsbody'>
                    <div>
                        <Job title={this.state.job1.title} time={this.state.job1.time} description={this.state.job1.description} />
                    </div>
                    <div>
                        <Job title={this.state.job2.title} time={this.state.job2.time} description={this.state.job2.description} />
                    </div>
                    <div>
                        <Job title={this.state.job3.title} time={this.state.job3.time} description={this.state.job3.description} />
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
        console.log('JobHistory.componentDidMount()')
    }

}