import React, { Component } from 'react';

import Header from './Header'
import Showcase from './Showcase'
import About from './About'
import Technologies from './Technologies'
import Contact from './Contact'
import Projects from './Projects'

class Main extends Component {

    render() {
        return(
            <div className='main'>
                <Header />
                <Showcase />
                <Projects />
                <Technologies /> 
                <Contact />
            </div>
        )
    }
}

export default Main