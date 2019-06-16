import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./home.js";
import About from './about.js';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    
    <Router>
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to="/">
          <ListItem>Home</ListItem>
        </Link>
        <Link to="/about">
          <ListItem>About</ListItem>
        </Link>
        <Link to="/projects">
          <ListItem>Projects</ListItem>
        </Link>
        <Link to="/education">
          <ListItem>Education</ListItem>
        </Link>
        <Link to="/skills">
          <ListItem>Skills/Experience</ListItem>
        </Link>
      </List>
      <Divider />
      
    </div>
    </Router>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}><MenuIcon/></Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  );
}