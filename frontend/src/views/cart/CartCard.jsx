import React, { useState } from 'react'
import { styled } from 'styled-components'
import ButtonCant from '../../components/buttonCant/ButtonCant';
import { Text } from '../../styles/global';
import img from '../../assets/logo.svg'

const CartCard = ({ data, dispatch }) => {


    const addCant = () => {
        dispatch({ type: "ADD_ONE_CART", data: data })
    }
    const restCant = () => {
        dispatch({ type: "DELETE_CART", data: data })
    }

    return (
        <Container>
            <div className='img'>
                <img src={data.imagen} alt="" />
                <div>
                    <h4>{data.nombre}</h4>
                    <h5>{data.categoria}</h5>
                </div>
            </div>
            <div className="text">
                <ButtonCant addCant={addCant} restCant={restCant} cant={data.cant} />
                <p className='price'>{data.precio * data.cant}$</p>
            </div>
        </Container>
    )
}

export default CartCard

const Container = styled.div`
    padding: 2rem 0;
    border-bottom: 1px solid #2928237a;
    .img{
        display: flex;
        gap: 1rem;
        flex-direction: column;
        img{
            width: 100%;
            background-color: red;
            min-height: 150px;
            object-fit: cover;

        }
        div{
            h4{
                ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '500' })};
            }
            h5{
                margin-top: 1rem;
                display: inline-block;
                background-color: ${props => props.theme.green};
                padding: .5rem;
                border-radius: 10px;
                text-transform: uppercase;
                ${Text({ size: '.8rem', color: props => props.theme.black, weight: '500' })};
            }
        }
    }

    .text{
        margin-top: 2rem;
        display: flex;
        justify-content:space-between;
        align-items: start;
        flex-direction: row;
        gap: 1rem;
        
        .price{
            ${Text({ size: '1.5rem', color: "#10861B", weight: '500' })};
        }
    }

    @media (min-width: 500px) {
        .img{
            img{
                max-height: 300px;
            }
        }
    }
    @media (min-width: 650px) {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .img{
            flex-direction: row;
            img{
                width: 250px;
                height: 200px;
            }
        }

        .text{
            margin-top: 0;
            flex-direction: column;
            align-items: flex-end;
        }
    }

`