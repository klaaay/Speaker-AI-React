import {
  GET_MESSAGE,
  QUESTION_SET,
  QUESTION_NEXT,
  CHECK_ANSWER
} from '../actions/types'

const INITIAL_STATE = {
  answer: '',
  question: '',
  questionLevel: 0,
  score: 'Waiting for marking',
  retry: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case QUESTION_SET:
      return { ...state, question: action.payload }
    case GET_MESSAGE:
      return { ...state, answer: action.payload }
    case QUESTION_NEXT:
      return { ...state, questionLevel: action.payload }
    case CHECK_ANSWER:
      return { ...state, retry: action.payload }
    default:
      return state;
  }
}