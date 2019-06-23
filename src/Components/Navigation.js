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
import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
import Work from '@material-ui/icons/Work';
import Mail from '@material-ui/icons/Mail';
import School from '@material-ui/icons/School';
import './nav.css'

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
      <AppBar position="static" className='nav'>
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

function TemporaryDrawer() {
  const navStyle = {
    flex: 1,
    flexDirection: 'row',
    margin: '20px'
  };

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
      className='navList'
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >

      <List>
        <ListItem className='linkText'><Home /><Link style={navStyle} to="/">Home</Link></ListItem>
        <ListItem className='linkText'><Person /><Link style={navStyle} to="/about">About</Link></ListItem>
        <ListItem className='linkText'><Work /><Link style={navStyle} to="/projects">Projects</Link></ListItem>
        <ListItem className='linkText'><School /><Link style={navStyle} to="/skills">Skills</Link></ListItem>
        <ListItem className='linkText'><Mail /><Link style={navStyle} to="/contact">Contact</Link></ListItem>
      </List>   
      <Divider />
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}><MenuIcon style={{color: 'white'}}/></Button>
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