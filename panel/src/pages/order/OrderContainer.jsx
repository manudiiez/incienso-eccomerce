import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useOrder } from '../../context/OrderContext'
import Order from './Order'
const OrderContainer = () => {

  const [order, setOrder] = useState(null);
  const [orderState, setOrderState] = useState(null);

  const { id } = useParams()
  const { getOrder, loading, updateOrder } = useOrder()

  useEffect(() => {
    const getData = async () => {
      const res = await getOrder(id)
      setOrder(res)
      setOrderState(res.state)
    }
    getData()
  }, [])

  return (
    <Container>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          <div className="container">
            {
              order && (
                <Order data={order} orderState={orderState} changeOrderState={setOrderState} />
              )
            }
          </div>
        )
      }
    </Container>
  )
}

export default OrderContainer

const Container = styled.section`

  padding: 5rem 1rem;

`