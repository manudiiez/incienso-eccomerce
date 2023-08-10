import React from 'react'
import { styled } from 'styled-components'
import { Text } from '../../styles/global'

const CartHeader = ({cant}) => {
  return (
    <Container>
        <h2>Carrito <span>de la tienda</span></h2>
        <p>{cant} productos</p>
    </Container>
  )
}

export default CartHeader

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #2928237a;

    h2{
        ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '500' })};
        span{
            display: none;
        }
    }
    
    p{
        ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '500' })};
    }
`
