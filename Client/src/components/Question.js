import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  question: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: '30px',
    height: '200px'
  },
  questionText: {
    textAlign: 'center'
  },
  buttonArea: {
    marginTop: '15px',
    marginBottom: '15px'
  },
  divider: {
    margin: '10px 0'
  },
  backAnswer: {
    // color:'#3F51B5'
    textAlign: 'center'
  }
});


class Question extends Component {

  componentDidMount = () => {
    this.props.initToken()
    // this.props.setQuestion(this.props.questionLevel)
  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.question} elevation={1}>
        <Typography variant="h3" component="h3" className={classes.questionText}>
          {this.props.question}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="h5" component="h5" className={classes.backAnswer}>
          {this.props.backAnswer}
        </Typography>
      </Paper>
    )
  }
}

function mapStateToProps(state) {
  return {
    question: state.message.question,
    backAnswer: state.message.backAnswer,
    questionLevel: state.message.questionLevel
  };
}

export default connect(mapStateToProps, actions)(withStyles(styles)(Question))