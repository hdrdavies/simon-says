import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import Game from './app/Game'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)
