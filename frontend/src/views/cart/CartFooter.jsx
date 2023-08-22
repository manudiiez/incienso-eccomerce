import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Text } from '../../styles/global'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';

const CartFooter = ({ data, dispatch }) => {

    const [price, setPrice] = useState(0);
    const navigate = useNavigate()

    const buy = () => {
        Swal.fire({
            title: 'Numero de telefono',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Enviar pedido',
            showLoaderOnConfirm: true,
            preConfirm: async (num) => {
                try {
                    const order = {
                        data: data,
                        phone: num
                    }
                    return await axios.post("http://localhost:3000/api/order", order)
                } catch (error) {
                    console.log(error);
                    Swal.showValidationMessage(
                        `Error: ${error}`
                    )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `Orden enviada`,
                    text: "Nos comunicaremos por whatsApp para terminar la compra.",
                    icon: "success"
                })
                dispatch({type: "BUY_CART", data: data})
                navigate('/')
            }
        })
    }

    useEffect(() => {
        const get = async () => {
            let num = 0
            data.map(item => (
                num += item.price * item.cant
            ))
            setPrice(num)
        }
        get()
    }, [data])

    return (
        <Container>
            <div>
                <p>Subtotal</p>
                <h6>{price}$</h6>
            </div>
            <button onClick={buy}>COMPRAR</button>
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