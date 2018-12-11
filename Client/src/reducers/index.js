import { combineReducers } from 'redux'
import message from './message'
import voiceGet from './voiceGet'
import timer from './timer'

export default combineReducers({
  message,
  voiceGet,
  timer
})