import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import ControlArea from "./ControlArea";
import BeginTip from "./BeginTip";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              AI Interview - Interview
            </Typography>
            <BeginTip />
            <ControlArea />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(withStyles(styles)(Header));
