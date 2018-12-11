import { INIT_TOKEN, QUESTION_SET } from '../actions/types'

const INITIAL_STATE = {
  tex: '',
  tok: '',
  spd: 5,
  pit: 5,
  vol: 15,
  per: 4
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case QUESTION_SET:
      return { ...state, tex: action.payload }
    case INIT_TOKEN:
      return { ...state, tok: action.payload }
    default:
      return state;
  }
}