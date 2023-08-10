import React from 'react'
import { styled } from 'styled-components'
import { Text } from '../../styles/global'

const ButtonCant = ({addCant, restCant, cant}) => {
    return (
        <Container>
            <button onClick={restCant}>-</button>
            <p>{cant}</p>
            <button onClick={addCant}>+</button>
        </Container>
    )
}

export default ButtonCant

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    p{
        display: flex;
        justify-content: center;
        align-items: center;
        ${Text({ size: '1rem', color: props => props.theme.black, weight: '400' })};
        background-color: ${props => props.theme.gray};
        width: 40px;
        height: 40px;
        border-radius: 10px;
    }
    button{
        cursor: pointer;

        width: 40px;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: ${props => props.theme.gray};
        &:hover{
            background-color: ${props => props.theme.green};
        }
    }


`