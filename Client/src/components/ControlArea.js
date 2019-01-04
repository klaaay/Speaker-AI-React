import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";

import * as actions from "../actions";

import btts from "../utils/baidu_tts_cors";

import $ from "jquery";

let playBtn = null;
let audio = null;

var voiceConfig = {
  volume: 0.3,
  autoDestory: true,
  timeout: 10000,
  hidden: false,
  autoplay: true,
  onInit: function(htmlAudioElement) {},
  onSuccess: function(htmlAudioElement) {
    audio = htmlAudioElement;
  },
  onError: function(text) {
    alert(text);
  },
  onTimeout: function() {
    alert("timeout");
  }
};

class ControlArea extends Component {
  componentDidMount = () => {
    playBtn = document.getElementById("playBtn");
  };

  tts = () => {
    playBtn.innerText = "While asking...";
    this.props.changeTip("While asking 🎶...");
    const { getConfig } = this.props;
    audio = btts(getConfig, voiceConfig, this.speackDone);
  };

  speackDone = () => {
    playBtn.innerText = "Please answer";
    this.props.changeTip("Please answer ✨");
    document.body.removeChild(audio);
    this.props.isAnswer(true);
    $("#recordeStarter").trigger("click");
  };

  sleep = time => {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  };

  clearAllAnswer = () => {
    this.props.clearQuestionBackAnswer();
    this.props.clearAnswer();
  };

  next = async () => {
    if (!this.props.retry) {
      if (!this.props.done) {
        if (this.props.questionLevel !== 0) {
          await this.sleep(3000);
        }
        await this.props.nextQuestion(this.props.questionLevel);
        await this.props.setQuestion(this.props.questionLevel);
        await this.props.getScore(this.props.question, this.props.answer);
        this.props.enterRecord(
          this.props.question,
          this.props.answer,
          this.props.score
        );
        this.clearAllAnswer();
        this.tts();
      } else {
        $("#resultBtn").trigger("click");
        // console.log("All Done");
      }
    }else{
      await this.sleep(3000);
      this.tts();
    }
  };

  render() {
    return (
      <Button
        variant="contained"
        color="primary"
        id="playBtn"
        onClick={this.next}
      >
        Begin
      </Button>
    );
  }
}

function mapStateToProps(state) {
  return {
    questionLevel: state.message.questionLevel,
    question: state.message.question,
    score: state.message.score,
    answer: state.message.answer,
    getConfig: state.voiceGet,
    retry: state.message.retry,
    done: state.message.done
  };
}

export default connect(
  mapStateToProps,
  actions
)(ControlArea);
