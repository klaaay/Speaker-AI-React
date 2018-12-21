import React, { Component } from 'react'
import Header from './Header'

import Grid from '@material-ui/core/Grid';

import Recorder from '../components/Recorder'
import Qustion from '../components/Question'
import Answer from '../components/Answer'
import Avator from '../components/Avator'
import WrapTimer from '../components/WrapTimer'

export default class Interviewer extends Component {
  render() {
    return (
      <div>
        <Header />
        <React.Fragment>
          <Recorder />
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <Avator />
            </Grid>
            <Grid item xs={9}>
              <Qustion />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={3} >
              <WrapTimer />
            </Grid>
            <Grid item xs={9}>
              <Answer />
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    )
  }
}