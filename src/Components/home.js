import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import './mods.css';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    page: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        lineHeight: '100%',
    },
  }));

export default function Home() {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container className={classes.page}>
                <h1 className='homeText'>Travis Evans</h1>
            </Container>
        </div>
    );
}

