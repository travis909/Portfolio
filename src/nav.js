import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.css';

const Nav = () => {
    return (
        <nav>
            <h3>Travis Evans</h3>

            <ul>
                <li>{<Link to={`/`}>Home</Link>}</li>
                <li>{<Link to={`/about`}>About</Link>}</li>
                <li>{<Link to={`/projects`}>Projects</Link>}</li>
            </ul>
        </nav>
    )
};

export default Nav;


