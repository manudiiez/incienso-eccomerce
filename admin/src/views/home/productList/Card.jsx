import React from 'react'
import { styled } from 'styled-components'
import img from '../../../assets/trash.png'
import { Text } from '../../../styles/global'

const Card = ({data, deleteItem}) => {
  return (
    <Container>
        <div className='data'>
            <h4>{data.nombre}</h4>
            <h5>{data.precio}$</h5>
        </div>

        <div className="methods">
            <button>Editar</button>
            <button onClick={deleteItem}><img src={img} alt="" /></button>
        </div>
    </Container>
  )
}

export default Card

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 2rem 1rem;
    box-shadow: 0px 20px 45px 0px #EDF6EE;

    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    
    .data{
        width: 100%;
        display: flex;
        justify-content: space-between; 
        align-items: center;
        flex-direction: row;
        h4{
            ${Text({ size: "1.3rem", color: props => props.theme.black, weight: '500' })};
        }
        h5{
            ${Text({ size: "1rem", color: "#10861B", weight: '500' })};

        }
    }
    
    .methods{
        width: 100%;
        display: flex;
        justify-content: start; 
        align-items: center;
        flex-direction: row;
        gap: 1rem;
        button{
            cursor: pointer;
            border-radius: 10px;
            border: none;
            height: 40px;
            width: 70px;
            ${Text({ size: "1rem", color: props => props.theme.black, weight: '500' })};
            img{
                width: 21px;
            }

            &:hover{
                transform: scale(1.05);
            }

            &:nth-of-type(1){
                background-color: ${props => props.theme.green};
            }
            &:nth-of-type(2){
                background-color: #C84E47;
            }
        }
    }

    @media (min-width: 550px){
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
        .data{
            width: fit-content;
            gap: 3rem;
            h4{
                ${Text({ size: "1.5rem", color: props => props.theme.black, weight: '500' })};
            }
            h5{
                ${Text({ size: "1.3rem", color: "#10861B", weight: '500' })};
            }
        }
        .methods{
            width: fit-content;
        }
    }
`