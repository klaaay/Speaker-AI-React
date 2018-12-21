import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Timer from './Timer'

import $ from 'jquery'

const styles = {
  count: {
    height: '100%',
    color: '#3F51B5',
    fontSize: '80px',
    fontWeight: 'bold'
  },
  notivication: {
    fontSize: '20px'
  }
};

class WrapTimer extends Component {

  tickCallback = () => {

  }

  completeCallback = () => {
    $('#recordeStoper').trigger('click')
    $('#recordeEnder').trigger('click')
  }

  render() {
    const { timer, classes } = this.props;
    const { initialTimeRemaining, interval } = timer
    return (
      <Grid container justify="center" alignItems="center" className={classes.count}>
        {(this.props.IsAnswer || this.props.IsWaitingForCheck) ? <Timer
          initialTimeRemaining={initialTimeRemaining}
          interval={interval}
          tickCallback={this.tickCallback}
          formatFunc={function (millionseconds) {
            return Math.ceil(millionseconds / 1000)
          }}
          completeCallback={this.completeCallback}
        /> : ""}
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    timer: state.timer,
    IsAnswer: state.timer.isAnswer,
    IsWaitingForCheck: state.timer.isWaitingForCheck
  };
}

export default connect(mapStateToProps, actions)(withStyles(styles)(WrapTimer))