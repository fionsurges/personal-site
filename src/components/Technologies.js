import React, { Component } from 'react'

class Technologies extends Component {
    render() {
        return(
            <div className='container'>
                <section>
                    <div className='text-container'>
                        <h2>Technologies</h2>
                        <div className='technologies'>
                            <div className='technology-section'>
                                <h3>Front End</h3>
                                <img src={require('../images/HTML_Logo.png')} alt='HTML'/>
                                <img src={require('../images/css3.png')} alt='CSS'/>
                                <img src={require('../images/Javascript.png')} alt='JS'/>
                                <img src={require('../images/react.png')} alt='react'/>
                                <img src={require('../images/reactnative.png')} alt='react'/>
                                <img src={require('../images/angular.png')} alt='angular'/>
                                <img src={require('../images/vue.png')} alt='vue'/>
                                <img src={require('../images/vuetify.png')} alt='vuetify'/> 
                            </div>
                            <div className='technology-section'>
                                <h3>Back End</h3>
                                <img src={require('../images/node.png')} alt='node'/>
                                <img src={require('../images/Javascript.png')} alt='JS'/>
                                <img src={require('../images/golang.png')} alt='golang'/>
                                <img src={require('../images/python.png')} alt='python'/>
                                <img src={require('../images/postgres.png')} alt='postgres'/>
                                <img src={require('../images/heroku.png')} alt='heroku'/>
                                <img src={require('../images/cypress.png')} alt='cypress'/>
                                <img src={require('../images/knex.png')} alt='knex'/>
                                <img src={require('../images/express.png')} width='100' alt='express'/>
                            </div>
                            <div className='technology-section'>
                                <h3>Other</h3>
                                <img src={require('../images/git.png')} alt='git'/>
                                <img src={require('../images/github.png')} alt='github'/>
                                <img src={require('../images/firebase.png')} alt='firebase'/>
                                <img src={require('../images/docker.png')} alt='docker'/>
                                <img src={require('../images/kubernetes.png')} alt='kubernetes'/>
                                <img src={require('../images/salesforce.png')} alt='salesforce'/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Technologies
