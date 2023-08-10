import React from 'react'
import { styled } from 'styled-components'
import ButtonCant from '../../components/buttonCant/ButtonCant'
import CartCard from './CartCard'

const CartList = ({ data, dispatch }) => {
    return (
        <Container>
            {
                data.map(item => (
                    <CartCard key={item._id} data={item} dispatch={dispatch} />
                ))
            }
        </Container>
    )
}

export default CartList

const Container = styled.div`


`