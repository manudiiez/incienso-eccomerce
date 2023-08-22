import React, { useState } from 'react'
import { styled } from 'styled-components'
import img from '../../assets/change.svg'
import { Text } from '../../styles/global';

const OrderInputDropdown = ({ orderState, changeOrderState }) => {

    const [state, setState] = useState(false);


    const clickState = (clicked) => {
        setState(false)
        changeOrderState(clicked)
    }


    return (
        <Container>
            <button className={`inputContent ${orderState === 'esperando pago' ? 'waiting' : orderState}`} onClick={() => setState(!state)}>
                <span>{orderState}</span>
                <img src={img} alt="" />
            </button>
            <ul className={state ? "active" : ""}>
                {
                    orderState !== 'nueva' && (
                        <li className='nueva'>
                            <button onClick={() => clickState("nueva")}>nueva</button>
                        </li>
                    )
                }
                {
                    orderState !== 'esperando pago' && (
                        <li className='waiting'>
                            <button onClick={() => clickState("esperando pago")}>esperando pago</button>
                        </li>
                    )
                }
                {
                    orderState !== 'pagada' && (
                        <li className='pagada'>
                            <button onClick={() => clickState("pagada")}>Pagada</button>
                        </li>
                    )
                }
                {
                    orderState !== 'enviada' && (
                        <li className='enviada'>
                            <button onClick={() => clickState("enviada")}>enviada</button>
                        </li>
                    )
                }
                {
                    orderState !== 'termianada' && (
                        <li>
                            <button onClick={() => clickState("termianada")}>terminada</button>
                        </li>
                    )
                }
            </ul>
        </Container>
    )
}

export default OrderInputDropdown

const Container = styled.div`

position: relative;

.inputContent{
    width: 100%;
    border: none;
    cursor: pointer;
    padding: 1rem;
    border-radius: 10px;
    ${Text({ size: '1.2rem', color: props => props.theme.black, weight: '700' })};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img{
        transition: transform .3s ease-in-out;
    }
    &:hover{
        img{
            transform: rotate(90deg);
        }
    }
}

ul{
    width: 100%;
    background-color: ${props => props.theme.gray};
    position: absolute;
    left: 0;
    height: 0;
    overflow: hidden;

    &.active{
        height: fit-content;
    }

    
    li{
        button{
            width: 100%;
            padding: 1rem;
            background-color: transparent;
            border: none;
            cursor: pointer;
            ${Text({ size: '1.2rem', color: props => props.theme.black, weight: '700' })};
            transition: transform .3s ease-in-out;
            &:hover{
                transform: scale(1.05);
            }
        }


    }
}



`