import React from 'react'
import { styled } from 'styled-components'

const Loader = () => {
    return (
        <Container>
        </Container>
    )
}

export default Loader

const Container = styled.div`

  border: 4px solid ${props => props.theme.green};
  border-left-color: transparent;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin89345 1s linear infinite;

@keyframes spin89345 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}


`