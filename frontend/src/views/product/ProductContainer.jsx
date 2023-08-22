import React, { useContext, useState } from 'react'
import { styled } from 'styled-components'
import Title from '../../components/title/Title'
import { Text } from '../../styles/global';
import { CartContext } from '../../context/CartContext';
import ButtonCant from '../../components/buttonCant/ButtonCant';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const ProductContainer = ({ data }) => {

    const [cant, setCant] = useState(1);
    const { loading, error, dispatch } = useContext(CartContext);
    const { cart } = useContext(CartContext)
    const navigate = useNavigate()


    const addCant = () => {
        setCant(cant + 1)
    }
    const restCant = () => {
        if (cant > 1) {
            setCant(cant - 1)
        }
    }

    const addCart = async () => {
        try {
            dispatch({ type: "ADD_CART", data: { ...data, cant: cant } })
            await Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }




    const getData = async () => {
        dispatch({ type: "GET_CART" })
        console.log(cart);

    }

    return (
        <Container>
            <div onClick={getData} className="img">
                <img src={data.image?.secure_url} alt="" />
            </div>
            <div className="content">
                <div className="title">
                    <Title width={60} font='2rem' fontpc='3rem' text={data.name} />
                </div>
                <img src={data.image?.secure_url} alt="" />
                <h3>{data.description}</h3>
                <div className='actions'>
                    <ButtonCant addCant={addCant} restCant={restCant} cant={cant} />
                    <p>{data.price}$</p>

                </div>

                <button className='addcart' onClick={addCart}>Agregar al carrito</button>
            </div>
        </Container>
    )
}

export default ProductContainer

const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    
    .img{
        display: none;
    }
    
    .content{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .title{
            width: 100%;
        }
        img{
            margin-top: 5rem;
            width: 100%;
            background-color: blue;
            height: 350px;
            max-width: 400px;
        }
        
        h3{
            margin-top: 3rem;
            ${Text({ size: '1.3rem', color: props => props.theme.black, weight: '400' })};
        }
        
        .actions{
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 1.5rem;
            margin-top: 2rem;
            div{
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
            }
            p{
                ${Text({ size: '1.5rem', color: "#10861B", weight: '500' })};
            }
        }
        
        .addcart{
            background-color: ${props => props.theme.green};
            ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '500' })};
            border: none;
            width: 100%;
            margin-top: 3rem;
            height: 50px;
            cursor: pointer;

            &:hover{
                background-color: #87aa96;
            }
        }
    }

    @media (min-width: 950px) {
        padding-top: 10rem;
        align-items: start;
        gap: 5rem;

        .img{
            display: block;
            width: 100%;
            height: 450px;
            background-color: blue;
            img{
                width: 100%;
                height: 450px;
                object-fit: cover;
            }
        }
        
        .content{
            width: 100%;
            height: 450px;
            justify-content: space-between;

            img{
                display: none;
            }

            h3{
                width: 100%;
            }

            .actions{
                width: 100%;
                justify-content: start;
            }
        }
    }
    

`