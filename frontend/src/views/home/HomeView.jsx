import React from 'react'
import Initial from './Initial'
import { styled } from 'styled-components'
import Shop from './Shop'

const HomeView = () => {
  return (
    <Container>
      <Initial/>
      <Shop/>
    </Container>
  )
}

export default HomeView

const Container = styled.div`
  display: grid;
  gap: 5rem;
  @media (min-width: 950px) {
    gap: 10rem;
  }
`
