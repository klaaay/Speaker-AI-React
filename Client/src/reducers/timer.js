import { IS_ANSWER } from '../actions/types'

const INITIAL_STATE = {
  isAnswer: false,
  initialTimeRemaining: 5000,
  interval: 1000
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case IS_ANSWER:
      return { ...state, isAnswer: action.payload }
    default:
      return state;
  }
}