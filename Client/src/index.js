import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import Recorder from './components/Recorder'
import Question from './components/Question'
import Answer from './components/Answer'


import reducers from './reducers';

// import axios from 'axios'
// window.axios = axios;

const storeEnhancers = compose(
  applyMiddleware(reduxThunk),
  (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f
)

const store = createStore(
  reducers,
  {},
  storeEnhancers
)

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)