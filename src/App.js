import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './home.js';
import About from './about.js';
import Projects from './projects.js';
import Nav from './nav.js';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Nav />

          <main>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/404" component={NotFound} />
          </main>
        </div>
      </Router>
    )
  }
};

const NotFound = () => <h1>404.. This page is not found!</h1>

export default App;