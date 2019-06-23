import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './mods.css';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    page: {
        textAlign: 'center',
        flexGrow: 10,
        flexDirection: 'row',
    },
    hidden: {
        color: 'white'
    }
  }));

export default function Home() {
    const classes = useStyles();
    return ( 
        <div className={classes.page}>
            <h1 className={classes.hidden}>.</h1>
            <h1 className={classes.hidden}>.</h1>
            <h1 className='title'>Travis Evans</h1>
        </div>
    );
}

