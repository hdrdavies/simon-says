import React from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../actions/items'
import * as gameActions from '../actions/game'
import Board from './Board'
import GameOver from './GameOver'
import { createGlobalStyle } from 'styled-components'

const RootThemes = createGlobalStyle`
  body {
    font-family: 'Open Sans';
  }
`

class GameContainer extends React.Component {
  componentDidMount () {
    this.props.fetchItems()
  }

  render () {
    return <Game {...this.props} />
  }
}

const Game = React.memo(({
  resetGame,
  game: {
    isGameOver,
    score
  },
  items: {
    hasItems,
    hasError
  }
}) => (
  <div>
    <RootThemes />
    {hasError && <h1>The pokedex failed to load! Is there something wrong with your connection?</h1>}
    {isGameOver && <GameOver score={score} resetGame={resetGame} />}
    {!isGameOver && hasItems && <Board />}
  </div>
))

export default connect(
  ({ game, items }) => ({
    game,
    items
  }),
  {
    fetchItems,
    ...gameActions
  }
)(GameContainer)
