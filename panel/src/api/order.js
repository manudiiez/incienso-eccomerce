import axios from './axios'

export const getOrdersRequest = (state, page) => axios.get(`/order?state=${state}&page=${page}`)
export const getOrderRequest = (id) => axios.get(`/order/${id}`)
export const updateOrderRequest = (id, body) => axios.put(`/order/${id}`, body)
