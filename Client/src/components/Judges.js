import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Recorder from '../components/Recorder'
import Paper from '@material-ui/core/Paper';

import openSocket from 'socket.io-client'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },

    bigAvatar: {
        width: 180,
        height: 180,
        margin: '40px'
    },

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
    },

    scoreBoard: {
        height: '100%',
        color: '#3F51B5',
        fontSize: '60px',
        fontWeight: 'bold'
    },

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
    tips: {
        color: '#3F51B5',
        textAlign: 'center'
    }
});

const socket = openSocket('http://localhost:5000')

class Judge extends Component {

    state = {
        question: '',
        answer: '',
        score: ''
    }

    componentDidMount = () => {
        socket.on('score', data => {
            this.setState({
                score: data.score
            })
        })
    }


    render() {
        socket.on('question', data => {
            this.setState({
                question: data.question,
                answer: ""
            })
        })
        socket.on('answer', data => {
            this.setState({
                answer: data.answer
            })
        })
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                AI Interview - Judge
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <React.Fragment>
                    <Recorder />
                    <Grid container spacing={24} >
                        <Grid item xs={3}>
                            <Grid container justify="center" alignItems="center">
                                <Avatar alt="Remy Sharp" src="/Avator.png" className={classes.bigAvatar} />
                            </Grid>
                        </Grid>
                        <Grid item xs={9}>
                            <Paper className={classes.question} elevation={1}>
                                <Typography variant="h2" component="h2" className={classes.questionText}>
                                    {this.state.question}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                        <Grid item xs={3} >
                            <Grid container justify="center" alignItems="center" className={classes.scoreBoard} >
                                {this.state.score}
                            </Grid>
                        </Grid>
                        <Grid item xs={9}>
                            <Paper className={classes.answer} elevation={1} >
                                <Typography variant="h2" component="h2" className={classes.answerText}>
                                    {this.state.answer}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </React.Fragment>
            </div>
        )
    }
}

export default withStyles(styles)(Judge);