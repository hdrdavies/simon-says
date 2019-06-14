import React from 'react'
import { connect } from 'react-redux'
import { demonstrateSequence, onOptionClick, startGame } from '../actions/game'
import { getRankingForScore } from './helpers'
import Item from './Item'
import { Container, Grid, Title } from './style/Board'

class BoardContainer extends React.Component {
  componentDidMount () {
    this.props.startGame()
  }

  componentDidUpdate (prevProps) {
    const { game, demonstrateSequence } = this.props
    if (game.isDemonstratingSequence &&
      prevProps.game.isDemonstratingSequence !== game.isDemonstratingSequence) {
      demonstrateSequence(game.sequence)
    }
  }

  render () {
    return <Board {...this.props} />
  }
}

const Board = React.memo(({
  onOptionClick,
  game: {
    score,
    options,
    ...gameProps
  }
}) => (
  <Container>
    <Title>Score: { score } ({getRankingForScore(score)})</Title>
    <Grid>
      { options.map(item => (
        <Item
          key={item.name}
          item={item}
          onOptionClick={onOptionClick}
          {...gameProps}
        />
      ))}
    </Grid>
  </Container>
))

export default connect(
  ({ game }) => ({ game }),
  {
    startGame,
    onOptionClick,
    demonstrateSequence
  }
)(BoardContainer)
