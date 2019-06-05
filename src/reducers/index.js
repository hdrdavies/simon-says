import { combineReducers } from 'redux'
import { game } from './game'
import { items } from './items'

const rootReducer = combineReducers({
  game,
  items
})

export default rootReducer
