import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';

import Recorder from '../components/Recorder'
import Qustion from '../components/Question'
import Answer from '../components/Answer'
import Avator from '../components/Avator'
import Scoreboard from '../components/Scoreboard'

export default class Judge extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Recorder />
                    <Grid container spacing={24} >
                        <Grid item xs={3}>
                            <Avator />
                        </Grid>
                        <Grid item xs={9}>
                            <Qustion />
                        </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                        <Grid item xs={3} >
                            <Scoreboard />
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