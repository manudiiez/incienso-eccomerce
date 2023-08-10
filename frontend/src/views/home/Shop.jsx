import React from 'react'
import { styled } from 'styled-components'
import Title from '../../components/title/Title'
import ShopListContainer from './shopList/ShopListContainer'

const Shop = () => {
  return (
    <Container>
        <div className="container">
            <Title width={70} font='2rem' fontpc='3rem' text="Nuestra tienda"   />
            <ShopListContainer/>
        </div>
    </Container>
  )
}

export default Shop

const Container = styled.div`
  padding-bottom: 5rem;
  @media (min-width: 950px) {
    padding-bottom: 10rem;

  }
`