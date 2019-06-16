import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import TemporaryDrawer from './Drawer.js';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  const navStyle = {
    color: 'white',
    flex: 1,
    flexDirection: 'row',
    margin: '20px'
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Travis Evans
          </Typography>
          <div>
            <nav>
              <Link style={navStyle} to="/">Home</Link>
              <Link style={navStyle} to="/about">About</Link> 
              <Link style={navStyle} to="/projects">Projects</Link> 
              <Link style={navStyle} to="/education">Education</Link>
              <Link style={navStyle} to="/skills">Skills</Link>
            </nav>
          </div>
        </Toolbar>
      </AppBar>
    </div>

  );
}
