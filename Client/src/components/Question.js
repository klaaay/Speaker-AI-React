import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import openSocket from 'socket.io-client'

const styles = theme => ({
  question: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: '30px',
    height: '200px'
  },
  buttonArea: {
    marginTop: '15px',
    marginBottom: '15px'
  }
});


class Question extends Component {

  componentDidMount = () => {
    this.props.initToken()
    this.props.setQuestion(this.props.questionLevel)
    const socket =  openSocket('http://localhost:5000')
    socket.emit('try',{server:'try'})
    socket.on('question',data=>{
      console.log(data)
    })
    socket.on('back',data=>{
      console.log(data)
    })
  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.question} elevation={1}>
        <Typography variant="h5" component="h3">
          Qustion Area
        </Typography>
        <Typography component="p">
          {this.props.question}
        </Typography>
      </Paper>
    )
  }
}

function mapStateToProps(state) {
  return {
    question: state.message.question,
    questionLevel: state.message.questionLevel
  };
}

export default connect(mapStateToProps, actions)(withStyles(styles)(Question))