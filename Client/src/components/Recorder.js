import React, { Component } from "react";
import { connect } from "react-redux";
import HZRecorder from "../utils/HZRecorder";
import * as actions from "../actions";

import $ from "jquery";

var recorder;
var playBtn = null;

class Recorder extends Component {
  componentDidMount = () => {
    playBtn = document.getElementById("playBtn");
  };

  startRecording = () => {
    HZRecorder.get(function(rec) {
      recorder = rec;
      recorder.start();
    });
  };

  stopRecording = () => {
    recorder.stop();
  };

  playRecording = () => {
    recorder.play(document.querySelector("audio"));
  };

  uploadAudioAnswer = callback => {
    callback(recorder.upload(), this.answerCallback);
  };

  uploadAudioCheck = callback => {
    callback(recorder.upload(), this.checkCallback);
  };

  answerCallback = async () => {
    await this.props.isAnswer(false);
    await this.props.initionTimer(this.props.initialCheckTimeReaminingSet);
    await this.props.isWaitingForCheck(true);
    playBtn.innerText = "Now check your answer...";
    this.props.changeTip("check your answer 🔍...");
  };

  checkCallback = async () => {
    await this.props.isAnswer(false);
    await this.props.initionTimer(this.props.initialTimeRemainingSet);
    await this.props.isWaitingForCheck(false);
    this.props.changeTip("Take a nap😉...");
    $("#playBtn").trigger("click");
  };

  recorderEnd = () => {
    if (this.props.IsAnswer) {
      this.uploadAudioAnswer(this.props.getAnswer);
    }
    if (this.props.IsWaitingForCheck) {
      this.uploadAudioCheck(this.props.checkAnswer);
    }
  };

  render() {
    return (
      <div style={{ display: "none" }}>
        <audio controls />
        <input
          onClick={this.startRecording}
          id="recordeStarter"
          type="button"
        />
        <input onClick={this.stopRecording} id="recordeStoper" type="button" />
        <input onClick={this.playRecording} type="button" id="recordePlayer" />
        <input onClick={this.recorderEnd} id="recordeEnder" type="button" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    IsAnswer: state.timer.isAnswer,
    IsWaitingForCheck: state.timer.isWaitingForCheck,
    initialTimeRemainingSet: state.timer.initialTimeRemainingSet,
    initialCheckTimeReaminingSet: state.timer.initialCheckTimeReaminingSet
  };
}

export default connect(
  mapStateToProps,
  actions
)(Recorder);
