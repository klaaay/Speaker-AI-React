import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';

import * as actions from '../actions'

import btts from '../utils/baidu_tts_cors'

import $ from 'jquery'

let playBtn = null
let audio = null;

var voiceConfig = {
  volume: 0.3,
  autoDestory: true,
  timeout: 10000,
  hidden: false,
  autoplay: true,
  onInit: function (htmlAudioElement) {
  },
  onSuccess: function (htmlAudioElement) {
    audio = htmlAudioElement;
  },
  onError: function (text) {
    alert(text)
  },
  onTimeout: function () {
    alert('timeout')
  }
}

class ControlArea extends Component {

  componentDidMount = () => {
    playBtn = document.getElementById('playBtn')
  }

  tts = (text) => {
    playBtn.innerText = 'While asking...';
    const { getConfig } = this.props
    audio = btts(getConfig, voiceConfig, this.done);
  }

  done = () => {
    playBtn.innerText = 'Please answer'
    document.body.removeChild(audio);
    this.props.isAnswer(true)
    $('#recordeStarter').trigger('click')
  }

  render() {
    return (
      <Button
        variant="contained"
        color="primary"
        id="playBtn"
        onClick={() => {
          this.tts(this.props.question)
        }}
      >
        Begin
      </Button>
    )
  }
}


function mapStateToProps(state) {
  return {
    question: state.message.question,
    getConfig: state.voiceGet
  };
}

export default connect(mapStateToProps, actions)(ControlArea)