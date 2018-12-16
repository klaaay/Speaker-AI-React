import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import Interviewer from './Interviewer'
import Judges from './Judges'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Interviewer} />
        <Route path='/judge' component={Judges} />
      </Switch>
    )
  }
}