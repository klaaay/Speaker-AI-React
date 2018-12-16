import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    scoreBoard: {
      height:'100%',
      color:'#3F51B5',
      fontSize:'20px',
      fontWeight:'bold'
    }
  };

class Scoreboard extends Component {
    
    render() {
        const { score,classes } = this.props;
        return (
            <Grid container justify="center" alignItems="center"   className={classes.scoreBoard}>
                {score}
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        score: state.message.score
    };
}

export default connect(mapStateToProps)(withStyles(styles)(Scoreboard))