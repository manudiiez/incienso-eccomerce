import axios from './axios'

export const getCategoriesRequest = async() => axios.get("/categories/")
export const createCategoryRequest = async(body) => axios.post(`/categories/`, body)
export const deleteCategoryRequest = async(id) => axios.delete(`/categories/${id}`)
 


