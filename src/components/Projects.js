import React, { Component } from 'react'
import {Header, Image, Modal} from 'semantic-ui-react'


import MainHeader from './Header'

let backgroundColors= {
    'white': '#fafafa',
    'gray' : '696969'
}
class Projects extends Component {
    render(){
        return(
            <div>
                <MainHeader />
                <section className='projects-container'>
                <div className='text-container'>
                    <h1>Projects</h1>
                    <p>My most recent contract with ShaleApps allowed me to build two production level features on the company's web app using Angular and Go for the backend and API endpoints. Source code is private and not accessible for the ShaleApps projects, but screen shots are provided below.</p>
                    <p>Other projects were completed during my time at Galvanize.</p>
                </div> 
                    <figure className='project shaleApps' style={{backgroundColor: backgroundColors.white}}> 
                        <div className='shaleApps-images'>
                            <Modal trigger={<Image src={require('../images/ShaleApps-Trucking-Contracts-Feature.png')} />}>
                                <Modal.Header>Trucking Contracts Feature</Modal.Header>
                                <Modal.Content image>
                                    <Image wrapped fluid src={require('../images/ShaleApps-Trucking-Contracts-Feature.png')} />
                                </Modal.Content>
                            </Modal>
                            <Modal trigger={<Image src={require('../images/ShaleApps-Wells-Feature-Angular.png')} />}>
                                <Modal.Header>ShaleApps wells with grouping(clustering), sorting, and checkboxes</Modal.Header>
                                <Modal.Content image>
                                    <Image wrapped fluid src={require('../images/ShaleApps-Wells-Feature-Angular.png')} />
                                </Modal.Content>
                            </Modal>
                        </div>
                        <div className='caption'>
                        <h2>ShaleApps</h2>
                            <figcaption>
                                Developed two production web app features using Angular and Golang.
                                <p style={{color: 'darkblue'}}>Click on images to enlarge</p>
                            </figcaption>
                        </div>
                    </figure>
                    <figure className='project' style={{backgroundColor: backgroundColors.gray}}>
                        <img src={require('../images/BeautyBasket.png')}/>
                        <h2>Beauty Basket</h2>
                        <figcaption className='caption'>
                            Capstone project written in React Native and Node.
                            <div className='project-buttons'>
                                <a href='https://github.com/fionwan/Beauty-Basket'>
                                    <img src={require('../images/github.png')}/>
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className='project' style={{ backgroundColor: backgroundColors.white }}>
                        <img src={require('../images/MusicPlayland.png')}/>
                        <h2>Music Playland</h2>
                        <figcaption className='caption'>
                            MVP built over Startup Weekend Denver - EDU using React.
                            <div className='project-buttons'>
                                <a href='https://github.com/fionwan/music-playland'>
                                    <img src={require('../images/github.png')} />
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className='project' style={{ backgroundColor: backgroundColors.gray }}>
                        <img src={require('../images/QueensOfReadALot.png')}/>
                        <h2>Queens of Read-A-Lot</h2>
                        <figcaption className='caption'>
                            Full stack CRUD "book club" web app written in React and Node.
                            <div className='project-buttons'>
                                <a href='https://github.com/fionwan/Queens-of-Read-a-Lot'>
                                    <img src={require('../images/github.png')} />
                                </a>
                                <a href='https://queens-of-read-a-lot.firebaseapp.com/'>
                                    <img src={require('../images/www.png')} />
                                </a>
                            </div> 
                        </figcaption>
                    </figure>
                    <figure className='project' style={{ backgroundColor: backgroundColors.white }}>
                        <img src={require('../images/whatappening.png')}/>
                        <h2>Whatsappening</h2>
                        <figcaption className='caption'>
                            Full stack CRUD web app written in Vue and Node.
                            <div className='project-buttons'>
                                <a href='https://github.com/fionwan/whatsappening'>
                                    <img src={require('../images/github.png')} />
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                </section>
            </div>
        )
    }
}

export default Projects