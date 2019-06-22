import React, { Component } from 'react'
import Navigation from './Components/Navigation.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/home.js';
import About from './Components/about.js';
import Contact from './Components/contact.js';
import Skills from './Components/skills.js';
import Projects from './Components/projects.js';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Portfolio" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}