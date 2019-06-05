import {
  ADD_TO_SEQUENCE,
  FINISH_GAME,
  HIGHLIGHT_OPTION,
  INCREMENT_SCORE,
  INCREMENT_TURN,
  REMOVE_OPTION_HIGHLIGHT,
  RESET_GAME,
  RESET_SCORE,
  RESET_SEQUENCE,
  RESET_TURN,
  SET_OPTIONS,
  START_ROUND,
  START_ROUND_FOR_PLAYER
} from '../actions/game'

export const initialState = {
  isDemonstratingSequence: false,
  isGameOver: false,
  score: 0,
  turn: 1,
  sequence: [],
  options: []
}

export const game = (state = initialState, action) => {
  switch (action.type) {
    case START_ROUND:
      return {
        ...state,
        isDemonstratingSequence: true,
        isGameOver: false
      }
    case FINISH_GAME: return { ...state, isGameOver: true }
    case RESET_GAME: return { ...state, isGameOver: false }
    case ADD_TO_SEQUENCE:
      return {
        ...state,
        sequence: [
          ...state.sequence,
          getRandomItemFromArray(state.options)
        ]
      }
    case RESET_SEQUENCE: return { ...state, sequence: [] }
    case SET_OPTIONS: return { ...state, options: action.options }
    case HIGHLIGHT_OPTION:
      return updateIsHighlightedForIndex(state, action.index, true)
    case REMOVE_OPTION_HIGHLIGHT:
      return updateIsHighlightedForIndex(state, action.index, false)
    case START_ROUND_FOR_PLAYER:return { ...state, isDemonstratingSequence: false }
    case INCREMENT_TURN: return { ...state, turn: state.turn + 1 }
    case RESET_TURN: return { ...state, turn: 1 }
    case INCREMENT_SCORE: return { ...state, score: state.score + 10 }
    case RESET_SCORE: return { ...state, score: 0 }
    default:
      return state
  }
}

const getRandomItemFromArray = array => array[Math.floor(Math.random() * array.length)]

const updateIsHighlightedForIndex = (state, index, bool) => ({
  ...state,
  options: state.options.map((option, i) => i === index
    ? { ...option, isHighlighted: bool }
    : option
  )
})
