import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

const styles = theme => (
    {
      root: {
        display: 'flex',
        alignItems: 'center'
      },
      card: {
        minWidth: 275,
        maxWidth: 400,
        marginRight: 20,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        marginBottom: 16,
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      actions: {
        display: 'flex',
      },
      expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: 'purple',
        fontSize: 12,
      },
      avatar2: {
        backgroundColor: 'red',
        fontSize: 12,
      }
    }
  );
  
  class Skills extends Component {
    render () {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="WCU" className={classes.avatar}>
                    WCU
                  </Avatar>
                }
                title="West Chester University"
                subheader="B.A. Psychology : 2011-2016"
              />
              <CardMedia
                className={classes.media}
                image="https://www.belfint.com/wp-content/uploads/2018/07/WCU.png"
                title="West Chester University"
              />
              <CardContent>
                <Typography component="p">
                  Description
                </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="UMUC" className={classes.avatar2}>
                    UMUC
                  </Avatar>
                }
                title="University of Maryland University College"
                subheader="M.S. Information Technology: Specialization in Software Engineering 2019-Present"
              />
              <CardMedia
                className={classes.media}
                image="https://shadygrove.umd.edu/sites/default/files/u75/academic-partner/logo/UMUC-ShadyGrove-Logo.png"
                title="West Chester University"
              />
              <CardContent>
                <Typography component="p">
                  Description
                </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
        </div>
      );
    }
  }
  
  Skills.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Skills);