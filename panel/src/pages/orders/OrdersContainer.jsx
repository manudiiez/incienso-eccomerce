import React from 'react'
import styled from 'styled-components'
import { useOrder } from '../../context/OrderContext'
import { useEffect } from 'react'
import OrderList from './OrderList'
import { useState } from 'react'
import OrderFilter from './OrderFilter'
import ListPagination from '../../components/pagination/ListPagination'

const OrdersContainer = () => {

    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("todas");
    const { getOrders, orders, pages } = useOrder()

    useEffect(() => {
        getOrders(category, page)
    }, [category, page])

    return (
        <Container>
            <div className="container">
                <OrderFilter changeCategory={setCategory} category={category} />
                {
                    orders && (
                        <OrderList orders={orders} />
                    )
                }
                <ListPagination page={page} setPage={setPage} pages={pages} />

            </div>
        </Container>
    )
}

export default OrdersContainer

const Container = styled.section`
    padding: 5rem 1rem;
    .container{
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
`