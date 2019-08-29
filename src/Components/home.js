import React, { Component } from 'react';
import './mods.css';
import Typography from '@material-ui/core/Typography'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Travis Evans"
        }
    }
    render(){
    return ( 
        <div className="page">
            <Typography><h1 className='header'>{this.state.text}</h1></Typography>
        </div>
    );
}}

