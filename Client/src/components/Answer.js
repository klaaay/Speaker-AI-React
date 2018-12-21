import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  answer: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: '25px',
    height: '200px'
  },
  divider: {
    margin: '10px 0'
  },
  answerText: {
    // color: '#3F51B5'
    textAlign: 'center'
  },
  tips:{
    color: '#3F51B5',
    textAlign:'center'
  }
});

class Answer extends Component {
  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.answer} elevation={1} >
        <Typography variant="h3" component="h3" className={classes.tips}>
          {this.props.tip}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="h5" component="h5" className={classes.answerText}>
          {this.props.answer ? this.props.answer : 'waiting for the answer'}
        </Typography>
      </Paper>
    )
  }
}

function mapStateToProps(state) {
  return {
    answer: state.message.answer,
    tip: state.message.tip
  };
}

export default connect(mapStateToProps, actions)(withStyles(styles)(Answer))