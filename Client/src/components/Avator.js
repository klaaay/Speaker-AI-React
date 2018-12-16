import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  bigAvatar: {
    width: 180,
    height: 180,
    margin:'40px'
  },
};

class Avator extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center" alignItems="center">
        <Avatar alt="Remy Sharp" src="/Avator.png" className={classes.bigAvatar} />
      </Grid>
    )
  }
}

export default withStyles(styles)(Avator);