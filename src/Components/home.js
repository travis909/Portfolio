import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './mods.css';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    page: {
        textAlign: 'center',
        justifyContent: 'center',
        flexGrow: 10,
        height: '100%',
        width: '100%',
    },
    hidden: {
        color: 'white'
    }
  }));



export default function Home() {
    const classes = useStyles();
    return ( 
        <div className={classes.page}>
        <div style={{height: '22.5%'}}></div>
            <Typography><h1 className='header'>Travis Evans</h1></Typography>
        </div>
    );
}

