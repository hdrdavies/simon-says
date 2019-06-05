/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions/game'

const mockStore = configureMockStore([thunk])

describe('game actions', () => {
  it('start game should dispatch actions to reset the game', () => {
    const expectedActions = [
      { type: actions.RESET_SEQUENCE },
      { type: actions.RESET_SCORE },
      { type: actions.RESET_TURN },
      { type: actions.ADD_TO_SEQUENCE },
      { type: actions.START_ROUND }
    ]
    const store = mockStore()

    store.dispatch(actions.startGame())

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('onOptionClick game should finish the game if the option is not correct', () => {
    const expectedActions = [
      { type: actions.FINISH_GAME }
    ]
    const store = mockStore()

    const sequence = [{
      name: 'foo',
      index: 1
    }, {
      name: 'bar',
      index: 2
    }, {
      name: 'baz',
      index: 0
    }]

    store.dispatch(actions.onOptionClick(1, sequence, 2))

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('onOptionClick game should increment the score and turn if the option is correct and it is not the last turn', () => {
    const expectedActions = [
      { type: actions.INCREMENT_SCORE },
      { type: actions.INCREMENT_TURN }
    ]
    const store = mockStore()

    const sequence = [{
      name: 'foo',
      index: 1
    }, {
      name: 'bar',
      index: 2
    }, {
      name: 'baz',
      index: 0
    }]

    store.dispatch(actions.onOptionClick(1, sequence, 1))

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('onOptionClick game should increment the score, reset the turn, add to the sequence and start the round if the option is correct and it is the last turn', () => {
    const expectedActions = [
      { type: actions.INCREMENT_SCORE },
      { type: actions.RESET_TURN },
      { type: actions.ADD_TO_SEQUENCE },
      { type: actions.START_ROUND }
    ]
    const store = mockStore()

    const sequence = [{
      name: 'foo',
      index: 1
    }, {
      name: 'bar',
      index: 2
    }, {
      name: 'baz',
      index: 0
    }]

    store.dispatch(actions.onOptionClick(0, sequence, 3))

    expect(store.getActions()).toEqual(expectedActions)
  })
})
