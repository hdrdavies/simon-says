/* eslint-disable no-undef */
import { game, initialState } from '../../src/reducers/game'
import {
  ADD_TO_SEQUENCE,
  FINISH_GAME,
  HIGHLIGHT_OPTION,
  INCREMENT_SCORE,
  INCREMENT_TURN,
  REMOVE_OPTION_HIGHLIGHT,
  RESET_SCORE,
  RESET_SEQUENCE,
  RESET_TURN,
  SET_OPTIONS,
  START_ROUND,
  START_ROUND_FOR_PLAYER
} from '../../src/actions/game'

describe('game reducer', () => {
  it('should return the initial state', () => {
    expect(game(undefined, {})).toEqual({
      isDemonstratingSequence: false,
      isGameOver: false,
      score: 0,
      turn: 1,
      sequence: [],
      options: []
    })
  })

  it('Start round should return a state with a new game and a sequence being demonstrated', () => {
    const actual = game(undefined, { type: START_ROUND })

    expect(actual.isDemonstratingSequence).toEqual(true)
    expect(actual.isGameOver).toEqual(false)
  })

  it('Finish game should return a state with the game over', () => {
    const actual = game(undefined, { type: FINISH_GAME })

    expect(actual.isGameOver).toEqual(true)
  })

  it('Add to sequence should return a state with another item added to the sequence', () => {
    const firstState = game(undefined, { type: ADD_TO_SEQUENCE })

    expect(firstState.sequence.length).toEqual(1)

    const secondState = game(firstState, { type: ADD_TO_SEQUENCE })

    expect(secondState.sequence.length).toEqual(2)
  })

  it('Reset sequence should return a state with an empty sequence', () => {
    const actual = game({
      ...initialState,
      sequence: [1, 2, 3, 4]
    }, { type: RESET_SEQUENCE })

    expect(actual.sequence).toEqual([])
  })

  it('Set options should return a state with the options from the action', () => {
    const actual = game({
      ...initialState,
      options: [1, 2, 3, 4]
    }, {
      type: SET_OPTIONS,
      options: [1, 2]
    })

    expect(actual.options).toEqual([1, 2])
  })

  it('Highlight option should return a state with the option of the action index highlighted', () => {
    const actual = game({
      ...initialState,
      options: [{
        name: 'foo',
        isHighlighted: false
      }, {
        name: 'bar',
        isHighlighted: false
      }, {
        name: 'baz',
        isHighlighted: false
      }]
    }, {
      type: HIGHLIGHT_OPTION,
      index: 1
    })

    expect(actual.options).toEqual([{
      name: 'foo',
      isHighlighted: false
    }, {
      name: 'bar',
      isHighlighted: true
    }, {
      name: 'baz',
      isHighlighted: false
    }])
  })

  it('Remove highlight option should return a state with the option of the action index not highlighted', () => {
    const actual = game({
      ...initialState,
      options: [{
        name: 'foo',
        isHighlighted: false
      }, {
        name: 'bar',
        isHighlighted: true
      }, {
        name: 'baz',
        isHighlighted: false
      }]
    }, {
      type: REMOVE_OPTION_HIGHLIGHT,
      index: 1
    })

    expect(actual.options).toEqual([{
      name: 'foo',
      isHighlighted: false
    }, {
      name: 'bar',
      isHighlighted: false
    }, {
      name: 'baz',
      isHighlighted: false
    }])
  })

  it('Start round for player should return a state with the demonstrating finished', () => {
    const actual = game(undefined, { type: START_ROUND_FOR_PLAYER })

    expect(actual.isDemonstratingSequence).toEqual(false)
  })

  it('Increment turn should return a state with the turn incremented by 1', () => {
    const actual = game({
      ...initialState,
      turn: 4
    }, { type: INCREMENT_TURN })

    expect(actual.turn).toEqual(5)
  })

  it('Reset turn should return a state with the turn as 1', () => {
    const actual = game({
      ...initialState,
      turn: 4
    }, { type: RESET_TURN })

    expect(actual.turn).toEqual(1)
  })

  it('Increment score should return a state with the score incremented by 10', () => {
    const actual = game({
      ...initialState,
      score: 50
    }, { type: INCREMENT_SCORE })

    expect(actual.score).toEqual(60)
  })

  it('Reset score should return a state with the score as 0', () => {
    const actual = game({
      ...initialState,
      score: 50
    }, { type: RESET_SCORE })

    expect(actual.score).toEqual(0)
  })
})
