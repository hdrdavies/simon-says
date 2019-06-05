import styled, { css, keyframes } from 'styled-components'

const wiggle = keyframes`
 from,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }
  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }
  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }
  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }
  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }
  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }
  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`

export const Container = styled.div`
  width 120px;
  height: 120px;
  padding: 8px;
  margin: 24px;
  float: left;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 4px;
  transition: transform .2s;
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
   ${props => props.isHighlighted && css`
      transform: scale(1.2)
  `}
`

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  width 80px;
  height: 80px;
    
   ${props => props.isHighlighted && css`
      -webkit-animation: 1s ${wiggle};
      animation: 1s ${wiggle};
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-transform-origin: center;
      transform-origin: center;
  `}
`

export const Text = styled.p`
  text-align: center;
  text-transform: capitalize;
  
   ${props => props.isHighlighted && css`
      font-weight: bold;
  `}
`
