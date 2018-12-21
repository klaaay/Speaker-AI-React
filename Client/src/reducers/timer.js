import {
  IS_ANSWER,
  IS_WAITING_FOR_CHECK,
  INITION_TIMER
} from '../actions/types'

const INITIAL_STATE = {
  isAnswer: false,
  isWaitingForCheck: false,
  initialTimeRemaining: 10000,
  interval: 1000
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case IS_ANSWER:
      return { ...state, isAnswer: action.payload }
    case IS_WAITING_FOR_CHECK:
      return { ...state, isWaitingForCheck: action.payload }
    case INITION_TIMER:
      return { ...state, initialTimeRemaining: action.payload }
    default:
      return state;
  }
}