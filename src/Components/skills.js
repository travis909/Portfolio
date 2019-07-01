import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default class Skills extends React.Component {
  render() {
    return (
      <Grid container justify="center" alignItems="center">
        <Grid container justify="center" alignItems="center">
          <UmucCard />
          <WcuCard />
        </Grid>
        <Grid container justify="center" alignItems="center" flexDirection="row">
         <Grid item> <RjsAvatar /> </Grid>
         <Grid item> <JsAvatar /> </Grid>
         <Grid item> <Java /> </Grid>
         <Grid item> <Css/> </Grid>
         <Grid item> <Html /> </Grid>
        </Grid>
      </Grid>
    );
  }
}

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: '#d3d3d3',
    maxWidth: 345,
    margin: 25,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    margin: 10,
    border: 2,
    borderStyle: 'solid',
  },
  bigAvatar: {
    margin: 10,
    width: 90,
    height: 90,
  },
}));

export function UmucCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className='center'>
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Grid container justify="center" alignItems="center">
            <Avatar alt="Broken" src={require("./images/umucMini.png")} className={classes.avatar} />
          </Grid>
        }
        title="University of Maryland University College"
        subheader="Spring 2019 - Spring 2021"
      />
      <CardMedia
        className={classes.media}
        image={require("./images/umucBackground.png")}
        title="University of Maryland University College"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          M.S. Information Technology
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Summary:</Typography>
          <Typography paragraph>
            Specialization in Software Engineering
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}

export function WcuCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className='center'>
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Grid container justify="center" alignItems="center">
            <Avatar alt="WCU" src={require("./images/WcuRam.png")} className={classes.avatar} />
          </Grid>
        }
        title="West Chester University of Pennsylvania"
        subheader="Fall 2011 - Spring 2016"
      />
      <CardMedia
        className={classes.media}
        image={require("./images/WcuBackground.png")}
        title="West Chester University"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          B.A. Psychology
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Summary:</Typography>
          <Typography paragraph>
            ...
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}

export function RjsAvatar() {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid container justify="center" alignItems="center">
        <Avatar alt="RjsLogo" src={require("./images/logo.svg")} className={classes.bigAvatar} />   
      </Grid>
      <Typography>React.js</Typography>
    </Grid>
  );
}

export function JsAvatar() {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid container justify="center" alignItems="center">
        <Avatar alt="jsLogo" src={require("./images/js.png")} className={classes.bigAvatar} />   
      </Grid>
      <Typography>JavaScript</Typography>
    </Grid>
  );
}

export function Java() {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid container justify="center" alignItems="center">
        <Avatar alt="javaLogo" src={require("./images/java.png")} className={classes.bigAvatar} />   
      </Grid>
      <Typography>Java</Typography>
    </Grid>
  );
}

export function Css() {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid container justify="center" alignItems="center">
        <Avatar alt="cssLogo" src={require("./images/css.png")} className={classes.bigAvatar} />   
      </Grid>
      <Typography>CSS</Typography>
    </Grid>
  );
}

export function Html() {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid container justify="center" alignItems="center">
        <Avatar alt="HTMLLogo" src={require("./images/html.png")} className={classes.bigAvatar} />   
      </Grid>
      <Typography>HTML</Typography>
    </Grid>
  );
}