import {
  GET_ANSWER,
  QUESTION_SET,
  QUESTION_NEXT,
  CHECK_ANSWER,
  CHANGE_TIP,
  QUESTION_BACK_ANSWER,
  GET_SCORE,
  ENTER_RECORED
} from "../actions/types";

const INITIAL_STATE = {
  answer: "",
  question: "The question is on the way...",
  result: [],
  backAnswer: "",
  questionLevel: 0,
  score: "",
  tip: "Please click the button for start 😊",
  retry: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case QUESTION_SET:
      return { ...state, question: action.payload };
    case GET_ANSWER:
      return { ...state, answer: action.payload };
    case QUESTION_BACK_ANSWER:
      return { ...state, backAnswer: action.payload };
    case QUESTION_NEXT:
      return { ...state, questionLevel: action.payload };
    case CHECK_ANSWER:
      return { ...state, retry: action.payload };
    case CHANGE_TIP:
      return { ...state, tip: action.payload };
    case GET_SCORE:
      return { ...state, score: action.payload };
    case ENTER_RECORED:
      console.log(action.payload);
      var newResult = state.result;
      newResult.push(action.payload);
      console.log(newResult);
      return { ...state, result: newResult };
    default:
      return state;
  }
}
