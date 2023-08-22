import { createContext, useContext, useState } from "react";
import { createProductsRequest, deleteProductsRequest, getProductRequest, getProductsRequest, updateProductsRequest, uploadImageRequest } from "../api/product";


const ProductContext = createContext()

export const useProduct = () => {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error('useProduct must be used within an ProductProvider')
    }
    return context
}


export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState([]);
    const [change, setChange] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async(search, category, page) => {
        try {
            const res = await getProductsRequest(search, page, category)
            setProducts(res.data.products)
            setPages(res.data.pages)
        } catch (error) {
            console.log(error);
        }
    }

    const getProduct = async(id) => {
        try {
            const res = await getProductRequest(id)
            return res.data
        } catch (error) {
            console.log(error);
        }
    }

    const updateProduct = async(id, values, file, previusImage) => {
        try {
            setLoading(true)
            if(file === previusImage){
                values.image = file
                await updateProductsRequest(id, values)
                setLoading(false)
            }else{
                const image = await uploadImage(file)
                values.image = image.data
                await updateProductsRequest(id, values)
                setChange(!change)
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const createProduct = async(values, file) => {
        try {
            console.log(values);
            setLoading(true)
            values.price = parseInt(values.price)
            const image = await uploadImage(file)
            values.image = image.data
            await createProductsRequest(values)
            setChange(!change)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setErrors(error.response.data)
        }
    }

    const uploadImage = async(file) => {
        const data = new FormData();
        data.append("image", file);
        data.append("upload_preset", "upload");
        return await uploadImageRequest(data)
    }

    const deleteProduct = async(id) => {
        try {
            const res = await deleteProductsRequest(id)
            if(res.status === 204) setProducts(products.filter(product => product._id !== id))
            setChange(!change)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <ProductContext.Provider value={{
            products,
            pages,
            change,
            errors,
            loading,
            getProducts,
            getProduct,
            deleteProduct,
            createProduct,
            updateProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}