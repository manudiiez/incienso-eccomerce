import React, { useContext, useState } from 'react'
import Menu from './Menu'
import { CartContext } from '../../context/CartContext';

const MenuContainer = () => {

    const [state, setState] = useState(false);
    const {cart} = useContext(CartContext)

    const menuMethod = () => {
        setState(!state)
    }

    return (
        <Menu state={state} menuMethod={menuMethod} cartCant={cart.length} />
    )
}

export default MenuContainer