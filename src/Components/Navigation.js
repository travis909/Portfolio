import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import TemporaryDrawer from './Drawer.js';
import { Link } from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/';

const useStyle1 = makeStyles(theme => ({
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
  const classes = useStyle1();



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Travis Evans
          </Typography>
          <TemporaryDrawer />
        </Toolbar>
      </AppBar>
    </div>

  );
}

const useStyle2 = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function TemporaryDrawer() {
  const navStyle = {
    color: 'purple',
    flex: 1,
    flexDirection: 'row',
    margin: '20px'
  };

  const classes = useStyle2();
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
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >

      <List>
        <ListItem><Home /><Link style={navStyle} to="/">Home</Link></ListItem>
        <ListItem><Link style={navStyle} to="/about">About</Link></ListItem>
        <ListItem><Link style={navStyle} to="/projects">Projects</Link></ListItem>
        <ListItem><Link style={navStyle} to="/education">Education</Link></ListItem>
        <ListItem><Link style={navStyle} to="/skills">Skills</Link></ListItem>
        <ListItem><Link to="/"/></ListItem>
      </List>   
      <Divider />
    </div>
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