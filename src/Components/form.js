import React from 'react';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import './form.css';
import { Grid, Cell } from 'react-mdl';


export default function Form() {
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        message: '',
    });
    
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    return (
        <div className="root">
            <Grid className='Grid'>
                <Cell>
                    <h3>Contact Form</h3>
                </Cell>
                <Cell>
                    <TextField
                        id="simple-start-adornment"
                        className={clsx('margin', 'text-field')}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">Name</InputAdornment>,
                        }}
                    />
                </Cell>
                <Cell>
                    <FormControl className={clsx('margin', 'text-field')}>
                        <InputLabel htmlFor="adornment-email">Email Address</InputLabel>
                        <Input
                        id="adornment-email"
                        value={values.email}
                        onChange={handleChange('email')}
                        />
                    </FormControl>
                </Cell>    
                <Cell><h4>Message</h4></Cell>
                <Cell className="message-box">
                    <TextField
                        id="form-message"
                        className="message"
                        InputProps={{
                            disableUnderline: true,
                            multiline: true,
                            rows: 14,
                        }}
                    />
                </Cell>
                <Cell className="ButtonCell"><Button variant="contained" className="Button">Submit</Button></Cell>
            </Grid>
        </div>

    )
}