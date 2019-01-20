import React, { Component } from "react"
import { Route, Link } from 'react-router-dom'

class Header extends Component {

    render(){
        return(
            <header>
                <Link to ='/'>
                    <div id='logo'>
                        <img src={require('../images/FW.png')} alt='FW'/>
                    </div>
                </Link>
                <nav className='contact-icons'>
                    <a href='https://www.linkedin.com/in/fionwan/'>
                        <img src={require('../images/linkedin.svg')} alt='linkedin' />
                    </a>
                    <a href='https://github.com/fionwan'>
                        <img src={require('../images/github.png')} alt='linkedin' />
                    </a>
                </nav> 
            </header>

        )
    }
}

export default Header
