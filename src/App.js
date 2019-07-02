import React, { Component } from 'react'
import Navigation from './Components/Navigation.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/home.js';
import About from './Components/about.js';
import Contact from './Components/contact.js';
import Skills from './Components/skills.js';
import Projects from './Components/projects.js';
import './App.css'
import Particles from 'react-particles-js';

const particleOpt = {
  "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#140303"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 192.28920296125386,
        "color": "#000000",
        "opacity": 0.6650001602410031,
        "width": 1.6024100246771156
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

export default class App extends Component {
  render() {
    return (
      <div className="particles">
          <Particles params={particleOpt} canvasClassName='canvas'/>

          <Router>
              <Navigation />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Portfolio" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/skills" component={Skills} />
                <Route path="/contact" component={Contact} />
              </Switch>
          </Router>
      </div>
    );
  }
}
