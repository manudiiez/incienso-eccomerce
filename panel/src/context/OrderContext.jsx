import { createContext, useContext, useState } from "react";
import { getOrderRequest, getOrdersRequest, updateOrderRequest } from "../api/order.js";


const OrderContext = createContext()

export const useOrder= () => {
    const context = useContext(OrderContext)
    if (!context) {
        throw new Error('useProduct must be used within an ProductProvider')
    }
    return context
}


export const OrderProvider = ({ children }) => {

    const [orders, setOrders] = useState([]);
    const [pages, setPages] = useState([]);
    const [change, setChange] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    const getOrders = async(state, page) => {
        try {
            const res = await getOrdersRequest(state, page)
            console.log(res);
            setOrders(res.data.orders)
            setPages(res.data.pages)
        } catch (error) {
            console.log(error);
        }
    }

    const getOrder = async(id) => {
        setLoading(true)
        try {
            const res =  await getOrderRequest(id)
            setLoading(false)
            return res.data
        } catch (error) {
            console.log(error);
        }
    }

    const updateOrder = async(id, state) => {
        try {
            const res =  await updateOrderRequest(id, {state: state})
            return res.data
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <OrderContext.Provider value={{
            orders,
            pages,
            change,
            errors,
            loading,
            getOrders,
            getOrder,
            updateOrder
        }}>
            {children}
        </OrderContext.Provider>
    )
}