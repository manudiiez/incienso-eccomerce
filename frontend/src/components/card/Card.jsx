import React from 'react'
import { styled } from 'styled-components'
import { Text } from '../../styles/global'
import {useNavigate} from 'react-router-dom'

const Card = ({ item }) => {

    const navigate = useNavigate();


    const clickCard = (id) => {
        navigate('/shop/'+id)
    }

    return (
        <Container onClick={() => clickCard(item._id)}>
            <div className='img'>
                <img src={item.image.secure_url} alt="" />
            </div>
            <div className="content">
                <h3>{item.name}</h3>
                <div>
                    <span>{item.category}</span>
                    <p>{item.price}$</p>
                </div>
            </div>
        </Container>
    )
}

export default Card

const Container = styled.div`
    height: 330px;
    width: 100%;
    max-width: 300px;
    cursor: pointer;
    transition: transform .4s ease-in-out;
    &:hover{
        transform: scale(1.05);
        /* background-color: ${props => props.theme.green}; */
    }
    .img{
        height: 200px;
        background-color: blue;
        img{
            height: 200px;
            width: 100%;
            object-fit: cover;
        }
    }

    .content{
        padding: 2rem 1rem;

        h3{
            ${Text({ size: '1.3rem', color: props => props.theme.black, weight: '400' })};
            margin-bottom: 1rem;
        }
        
        div{
            display: flex;
            gap: 1.3rem;
            justify-content: start;
            align-items: center;
            span{
                ${Text({ size: '1rem', color: props => props.theme.black, weight: '500' })};
                background-color: ${props => props.theme.green};
                border-radius: 10px;
                padding: .5rem;
            }
            p{
                ${Text({ size: '1.3rem', color: '#10861B', weight: '500' })};
            }
        }
    }

`