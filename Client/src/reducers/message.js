import {
  GET_ANSWER,
  QUESTION_SET,
  QUESTION_NEXT,
  CHECK_ANSWER,
  CHANGE_TIP,
  QUESTION_BACK_ANSWER
} from '../actions/types'

const INITIAL_STATE = {
  answer: '',
  question: 'The question is on the way...',
  backAnswer: '',
  questionLevel: 0,
  score: 'Waiting for marking',
  tip: 'Please click the button for start 😊',
  retry: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case QUESTION_SET:
      return { ...state, question: action.payload }
    case GET_ANSWER:
      return { ...state, answer: action.payload }
    case QUESTION_BACK_ANSWER:
      return { ...state, backAnswer: action.payload }
    case QUESTION_NEXT:
      return { ...state, questionLevel: action.payload }
    case CHECK_ANSWER:
      return { ...state, retry: action.payload }
    case CHANGE_TIP:
      return { ...state, tip: action.payload }
    default:
      return state;
  }
}