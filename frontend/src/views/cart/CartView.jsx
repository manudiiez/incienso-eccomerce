import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { CartContext } from '../../context/CartContext';
import CartHeader from './CartHeader';
import CartList from './CartList';
import CardFooter from './CartFooter'


const CartView = () => {

    const { cart, dispatch } = useContext(CartContext)


    return (
        <Container>
            <div className="container">
                <CartHeader cant={cart.length} />
                <CartList data={cart} dispatch={dispatch}/>
                <CardFooter data={cart}/>
            </div>
        </Container>
    )
}

export default CartView

const Container = styled.section`
    padding-bottom: 5rem;


`