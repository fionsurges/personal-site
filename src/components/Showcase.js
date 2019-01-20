import React, { Component } from "react"
import About from './About'


class Showcase extends Component {

    render(){
        return(
            <div className='container'>
                <section id='showcase'>
                    <div>
                        <img src={require('../images/headshot.jpg')}/>
                    </div>
                    <div className='info'>
                        <div className='name'>
                            <h1>FION WAN</h1>
                            <p>Full Stack Web Developer</p>
                        </div>
                        <section className='about'>
                            <About />
                        </section>
                    </div>
                </section>
            </div>
        )
    }
}

export default Showcase