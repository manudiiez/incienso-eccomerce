import React from 'react'
import { styled } from 'styled-components'
import { Text } from '../../styles/global';
import OrderInputDropdown from './OrderInputDropdown';
import { useOrder } from '../../context/OrderContext';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const Order = ({ data, orderState, changeOrderState }) => {

    console.log(data);
    const { updateOrder, loading } = useOrder()
    const navigate = useNavigate()

    const changeState = async () => {
        await updateOrder(data._id, orderState)
        await Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        navigate('/orders')

    }


    return (
        <Container>
            <OrderInputDropdown orderState={orderState} changeOrderState={changeOrderState} />
            <p className='id'>N°{data._id}</p>
            <div className='orderHeader'>
                <p className='user'><span>Alias:</span> manudiiez</p>
                <p className='user'><span>Cel:</span> {data.phone}</p>
            </div>
            <div className='orderBody'>
                {
                    data.order.map(item => (
                        <div key={item.product._id} className='orderBodyCard'>
                            <p className='productName'>{item.product.name}</p>
                            <p className='productCategory'>{item.product.category}</p>
                            <div>
                                <p className='productPrice'><span>Precio/u: </span>{item.product.price}$</p>
                                <p className='productCant'><span>Cantidad: </span>{item.cant}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="orderFooter">
                <div className="orderTotal">
                    <span>Total:</span>
                    <p>{data.total}$</p>
                </div>
                <button disabled={loading} onClick={changeState}>Guardar</button>
            </div>
        </Container>
    )
}

export default Order

const Container = styled.section`

    display: flex;
    flex-direction: column;
    gap: 2rem;
    .state{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        background-color: ${props => props.theme.green};
        border: none;
        cursor: pointer;
        padding: 1rem;
        border-radius: 10px;
        ${Text({ size: '1.2rem', color: props => props.theme.black, weight: '700' })};
        img{
            transition: transform .3s ease-in-out;
        }
        
        &:hover{
            background-color: ${props => props.theme.green2};
            img{
                transform: rotate(90deg);
            }
        }
    }

    .id{
      ${Text({ size: '1.2rem', color: props => props.theme.green, weight: '700' })};
      padding: 1rem;
      border-radius: 20px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
    .orderHeader{
        padding: 2rem 1rem;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .user{
          ${Text({ size: '1.2rem', color: props => props.theme.black, weight: '400' })};
          span{
            font-weight: 700;
          }
        }
    }

    .orderBody{
        padding: 2rem 1rem;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .orderBodyCard{
        box-shadow: 0 4px 2px -3px rgba(0, 0, 0, 0.25);

        .productName{
          ${Text({ size: '1.3rem', color: props => props.theme.green, weight: '700' })};
          margin-bottom: 1rem;
        }
        .productCategory{
            ${Text({ size: '1rem', color: props => props.theme.black, weight: '500' })};
            background-color: ${props => props.theme.green};
            padding: .5rem;
            border-radius: 10px;
            margin-bottom: 2rem;
        }
        
        .productPrice{
            ${Text({ size: '1.2rem', color: "#10861B", weight: '500' })};
            span{
                font-weight: 700;
                color: ${props => props.theme.black};
            }
            margin-bottom: 1rem;
        }

        .productCant{
            ${Text({ size: '1.2rem', color: props => props.theme.black, weight: '500' })};
            span{
                font-weight: 700;
                color: ${props => props.theme.black};
            }
        }

        div{
            display: flex;
            flex-direction: column;
        }
    }

    .orderFooter{
        padding: 2rem 1rem;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        .orderTotal{
            width: 100%;
            display: flex;
            justify-content: space-between;
            ${Text({ size: '1.2rem', color: props => props.theme.black, weight: '500' })};
            p{
                color: #10861B;
                font-weight: 700;
            }
        }
        
        button{
            ${Text({ size: '1.2rem', color: props => props.theme.black, weight: '500' })};
            width: 100%;
            margin-top: 2rem;
            background-color: ${props => props.theme.green};
            border: none;
            padding: .5rem;
            border-radius: 10px;

            &:hover{
                background-color: ${props => props.theme.green2};
            }
        }
    }

    @media (min-width: 750px) {
        .orderHeader{
            flex-direction: row;
            justify-content: space-between;
        }

        .orderBodyCard{
            div{
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }

`