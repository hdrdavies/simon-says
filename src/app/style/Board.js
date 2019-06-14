import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
`

export const Title = styled.p`
  text-align: center;
`

export const Grid = styled.div`
  margin: 0 auto;
  max-width: 200px;
  
  @media (min-width: 400px) {
    max-width: 400px;
  }
`
