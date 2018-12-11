import React, { Component } from 'react'
import { connect } from 'react-redux'
import HZRecorder from '../utils/HZRecorder'
import * as actions from '../actions'

import $ from 'jquery'

var recorder;

class Recorder extends Component {

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

    uploadAudio = (callback) => {
        callback(recorder.upload(), this.answerCallback)
    }

    answerCallback = async () => {
        this.props.nextQuestion(this.props.questionLevel)
        await this.props.setQuestion(this.props.questionLevel)
        $('#playBtn').trigger('click');
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
                    value="录音"
                />
                <input
                    onClick={
                        this.stopRecording
                    }
                    id="recordeStoper"
                    type="button"
                    value="停止" />
                <input
                    onClick={
                        this.playRecording
                    }
                    type="button"
                    value="播放" />
                <input
                    onClick={
                        () => {
                            this.uploadAudio(this.props.getAnswer)
                        }
                    }
                    id="recordeEnder"
                    type="button"
                    value="提交" />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questionLevel: state.message.questionLevel
    };
}

export default connect(mapStateToProps, actions)(Recorder)