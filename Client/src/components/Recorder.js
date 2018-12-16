import React, { Component } from 'react'
import { connect } from 'react-redux'
import HZRecorder from '../utils/HZRecorder'
import * as actions from '../actions'

import $ from 'jquery'

var recorder;
var playBtn = null;

class Recorder extends Component {

    componentDidMount = () => {
        playBtn = document.getElementById('playBtn')
    }

    startRecording = () => {
        HZRecorder.get(function (rec) {
            recorder = rec;
            recorder.start();
        });
    }

    stopRecording = () => {
        recorder.stop();
    }

    playRecording = () => {
        recorder.play(document.querySelector('audio'));
    }

    uploadAudioAnswer = (callback) => {
        callback(recorder.upload(), this.answerCallback)
    }

    uploadAudioCheck = (callback) => {
        callback(recorder.upload(), this.checkCallback)
    }

    answerCallback = async () => {
        await this.props.isAnswer(false)
        await this.props.initionTimer(3000)
        await this.props.isWaitingForCheck(true)
        playBtn.innerText = 'check your answer...'
    }

    checkCallback = async () => {
        await this.props.isAnswer(false)
        await this.props.initionTimer(5000)
        await this.props.isWaitingForCheck(false)
        $('#playBtn').trigger('click')
    }

    render() {
        return (
            <div style={{ display: 'none' }}>
                <audio controls></audio>
                <input
                    onClick={
                        this.startRecording
                    }
                    id="recordeStarter"
                    type="button"
                />
                <input
                    onClick={
                        this.stopRecording
                    }
                    id="recordeStoper"
                    type="button"
                />
                <input
                    onClick={
                        this.playRecording
                    }
                    type="button"
                    id="recordePlayer"
                />
                <input
                    onClick={
                        () => {
                            if (this.props.IsAnswer) {
                                this.uploadAudioAnswer(this.props.getAnswer)
                            }
                            if (this.props.IsWaitingForCheck) {
                                this.uploadAudioCheck(this.props.checkAnswer)
                            }
                        }
                    }
                    id="recordeEnder"
                    type="button"
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        IsAnswer: state.timer.isAnswer,
        IsWaitingForCheck: state.timer.isWaitingForCheck
    };
}

export default connect(mapStateToProps, actions)(Recorder)