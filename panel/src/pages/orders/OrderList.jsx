import React from 'react'
import styled from 'styled-components'
import OrderCard from './OrderCard'

const OrderList = ({orders}) => {
  return (
    <Container>
        {
            orders.length === 0 ? (
                <p>no hay ordenes</p>
            ):(
                <div className='list'>
                    {
                        orders.map(order => (
                            <OrderCard key={order._id} data={order}/>
                        ))
                    }
                </div>
            )
        }
    </Container>
  )
}

export default OrderList

const Container = styled.div`

    .list{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        flex-direction: column;
    }

`