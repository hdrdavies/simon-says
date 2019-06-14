import React from 'react'
import { getRankingForScore } from './helpers'
import { Button, Container } from './style/GameOver'

const GameOver = React.memo(({
  resetGame,
  score
}) => (
  <Container>
    <h1>Team Rocket Rules!</h1>
    <h2>Your Score</h2>
    <p>{score}</p>
    <h2>Your rank</h2>
    <p>{getRankingForScore(score)}</p>
    <Button onClick={() => resetGame()}>Start again</Button>
  </Container>
))

export default GameOver
