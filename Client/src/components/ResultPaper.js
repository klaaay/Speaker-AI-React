import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  resultBtn: {
    display: "none"
  },
  score:{
      marginRight:"50px",
      color:"#3F51B5"
  },
  answer:{
    color:"#3F51B5"
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ResultPaper extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, results, done } = this.props;
    console.log(done);
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          className={classes.resultBtn}
          id="resultBtn"
          onClick={this.handleClickOpen}
        >
          Open full-screen dialog
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Result
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            {results.map((result,index) => {
              return (
                <React.Fragment  key={index}>
                  <ListItem button>
                    <ListItemText
                      primary={
                        <div>
                          <h3>{"Q: " + result.question}</h3>
                          <h3 className={classes.answer} >{"A: " + result.answer}</h3>
                        </div>
                      }
                    />
                    <ListItemSecondaryAction>
                      <h2 className={classes.score} >{result.score}</h2>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              );
            })}
          </List>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.message.result,
    done: state.message.done
  };
}

export default connect(mapStateToProps)(withStyles(styles)(ResultPaper));
