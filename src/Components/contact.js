import React from 'react';
import './contact.css';
import { Grid,  } from 'react-mdl';
import Form from './form.js';

class Contact extends React.Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
            <Form />
        </Grid>
      </div>    
    )
  }
}

export default Contact;
