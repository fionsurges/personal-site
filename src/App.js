import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Main from './components/Main'
import Projects from './components/Projects'

class App extends Component {
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <main>
            <Switch>
              <Route exact path='/' component={() => <Main />} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
