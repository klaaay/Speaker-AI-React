import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  answer: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: '25px',
    height: '200px'
  },
});

class Answer extends Component {
  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.answer} elevation={1}>
        <Typography variant="h5" component="h3">
          Qustion Area
        </Typography>
        <Typography component="p">
          {this.props.answer ? this.props.answer : 'waiting for the answer'}
        </Typography>
      </Paper>
    )
  }
}

function mapStateToProps(state) {
  return {
    answer: state.message.answer
  };
}

export default connect(mapStateToProps, actions)(withStyles(styles)(Answer))
