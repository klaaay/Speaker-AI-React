import {
  GET_ANSWER,
  INIT_TOKEN,
  QUESTION_SET,
  IS_ANSWER,
  IS_WAITING_FOR_CHECK,
  QUESTION_NEXT,
  INITION_TIMER,
  CHECK_ANSWER,
  CHANGE_TIP,
  QUESTION_BACK_ANSWER,
  ENTER_RECORED,
  GET_SCORE
} from "./types";

import axios from "axios";
import openSocket from "socket.io-client";

export const initToken = () => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:5000/token`);
    dispatch({
      type: INIT_TOKEN,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }
};

export const setQuestion = questionLevel => async dispatch => {
  try {
    const res = await axios.post("http://localhost:5000/question", {
      questionLevel: questionLevel
    });
    console.log(res.data);
    dispatch({
      type: QUESTION_SET,
      payload: {
        question: res.data.question,
        done: res.data.done
      }
    });
    openSocket("http://localhost:5000");
  } catch (e) {
    console.log(e);
  }
};

export const nextQuestion = questionLevel => {
  var newQuestionLevel = questionLevel + 1;
  console.log(newQuestionLevel);
  return {
    type: QUESTION_NEXT,
    payload: newQuestionLevel
  };
};

export const getAnswer = (voice, callback) => async dispatch => {
  let config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/answer/get",
      voice,
      config
    );
    dispatch({
      type: GET_ANSWER,
      payload: res.data.questionAnswer
    });
    dispatch({
      type: QUESTION_BACK_ANSWER,
      payload: res.data.backAnswer
    });
    callback();
  } catch (err) {
    console.log(err);
  }
};

export const checkAnswer = (voice, callback) => async dispatch => {
  let config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/answer/check",
      voice,
      config
    );
    dispatch({
      type: CHECK_ANSWER,
      payload: res.data
    });
    callback();
  } catch (err) {
    console.log(err);
  }
};

export const enterRecord = (question, answer, score) => {
  return {
    type: ENTER_RECORED,
    payload: {
      question,
      answer,
      score
    }
  };
};

export const getScore = (question, answer) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:5000/score", {
      question: question,
      answer: answer
    });
    console.log(res.data);
    dispatch({
      type: GET_SCORE,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const isAnswer = status => {
  return {
    type: IS_ANSWER,
    payload: status
  };
};

export const isWaitingForCheck = status => {
  return {
    type: IS_WAITING_FOR_CHECK,
    payload: status
  };
};

export const initionTimer = initTime => {
  return {
    type: INITION_TIMER,
    payload: initTime
  };
};

export const changeTip = tip => {
  return {
    type: CHANGE_TIP,
    payload: tip
  };
};

export const clearQuestionBackAnswer = () => {
  return {
    type: QUESTION_BACK_ANSWER,
    payload: ""
  };
};

export const clearAnswer = () => {
  return {
    type: GET_ANSWER,
    payload: ""
  };
};
