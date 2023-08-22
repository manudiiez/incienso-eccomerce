import axios from './axios'

export const getProductsRequest = (search, page, category) => axios.get(`/products?category=${category}&search=${search}&page=${page}`)
export const getProductRequest = (id) => axios.get(`/products/${id}`)
export const deleteProductsRequest = (id) => axios.delete(`/products/${id}`)
export const createProductsRequest = (values) => axios.post(`/products`, values)
export const updateProductsRequest = (id, values) => axios.put(`/products/${id}`, values)
export const uploadImageRequest = (image) => axios.post(`/products/image`, image)
