export const START_ROUND = 'START_ROUND'
const startRound = () => ({ type: START_ROUND })

export const FINISH_GAME = 'FINISH_GAME'
const finishGame = () => ({ type: FINISH_GAME })

export const RESET_GAME = 'RESET_GAME'
export const resetGame = () => ({ type: RESET_GAME })

export const ADD_TO_SEQUENCE = 'ADD_TO_SEQUENCE'
const addToSequence = () => ({ type: ADD_TO_SEQUENCE })

export const RESET_SEQUENCE = 'RESET_SEQUENCE'
const resetSequence = () => ({ type: RESET_SEQUENCE })

export const SET_OPTIONS = 'SET_OPTIONS'
export const setOptions = options => ({
  type: SET_OPTIONS,
  options
})

export const HIGHLIGHT_OPTION = 'HIGHLIGHT_OPTION'
const highlightOption = index => ({
  type: HIGHLIGHT_OPTION,
  index
})

export const REMOVE_OPTION_HIGHLIGHT = 'REMOVE_OPTION_HIGHLIGHT'
const removeOptionHighlight = index => ({
  type: REMOVE_OPTION_HIGHLIGHT,
  index
})

export const START_ROUND_FOR_PLAYER = 'START_ROUND_FOR_PLAYER'
const startRoundForPlayer = () => ({ type: START_ROUND_FOR_PLAYER })

export const INCREMENT_TURN = 'INCREMENT_TURN'
const incrementTurn = () => ({ type: INCREMENT_TURN })

export const RESET_TURN = 'RESET_TURN'
const resetTurn = () => ({ type: RESET_TURN })

export const INCREMENT_SCORE = 'INCREMENT_SCORE'
const incrementScore = () => ({ type: INCREMENT_SCORE })

export const RESET_SCORE = 'RESET_SCORE'
const resetScore = () => ({ type: RESET_SCORE })

export const startGame = () => dispatch => {
  dispatch(resetSequence())
  dispatch(resetScore())
  dispatch(resetTurn())
  dispatch(addToSequence())
  dispatch(startRound())
}

export const onOptionClick = (index, sequence, turn) => dispatch => {
  const isCorrect = index === sequence[turn - 1].index
  const isLastGo = turn === sequence.length

  if (isCorrect && isLastGo) {
    dispatch(incrementScore())
    dispatch(resetTurn())
    dispatch(addToSequence())
    dispatch(startRound())
  } else if (isCorrect) {
    dispatch(incrementScore())
    dispatch(incrementTurn())
  } else {
    dispatch(finishGame())
  }
}

export const demonstrateSequence = sequence => async dispatch => {
  await waitFor(500)
  await asyncForEach(sequence, async ({ index }, i) => {
    dispatch(highlightOption(index))
    await waitFor(1000)
    dispatch(removeOptionHighlight(index))
    await waitFor(200)

    if (isLastItem(i, sequence)) {
      dispatch(startRoundForPlayer())
    }
  })
}

const waitFor = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))

async function asyncForEach (array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const isLastItem = (index, array) => index === array.length - 1
