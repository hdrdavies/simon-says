import React from 'react'
import { Container, Image, Text } from './style/Item'

const Item = React.memo(({
  item: {
    index,
    name,
    imageUrl,
    isHighlighted
  },
  onOptionClick,
  isDemonstratingSequence,
  isGameOver,
  sequence,
  turn
}) => (
  <Container
    isHighlighted={isHighlighted}
    onClick={() => {
      if (!isDemonstratingSequence && !isGameOver) {
        onOptionClick(index, sequence, turn)
      }
    }}
  >
    <Image
      alt={name}
      src={imageUrl}
      isHighlighted={isHighlighted}
    />
    <Text isHighlighted={isHighlighted}>{name}</Text>
  </Container>
))

export default Item
