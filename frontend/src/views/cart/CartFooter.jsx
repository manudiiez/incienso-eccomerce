import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Text } from '../../styles/global'
import axios from 'axios';

const CartFooter = ({ data }) => {

    const [price, setPrice] = useState(0);

    useEffect(() => {
        const get = async() => {
            const res = await axios.post("http://localhost:8080/api/cart", {data: data})
            setPrice(res.data)
        }
        get()
    }, [data])

    return (
        <Container>
            <div>
                <p>Total</p>
                <h6>{price}$</h6>
            </div>
            <button>COMPRAR</button>
        </Container>
    )
}

export default CartFooter

const Container = styled.div`
    margin-top: 5rem;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '500' })};
        }
        
        h6{
            ${Text({ size: '1.5rem', color: "#10861B", weight: '500' })};
        }
    }
    
    button{
        ${Text({ size: '1rem', color: props => props.theme.black, weight: '500' })};
        width: 100%;
        height: 50px;
        border: none;
        margin-top: 2rem;
        background-color: ${props => props.theme.green};

        &:hover{
            background-color: #87aa96;
        }
    }

`