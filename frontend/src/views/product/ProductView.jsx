import React from 'react'
import { styled } from 'styled-components'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/loader/Loader';
import ProductContainer from './ProductContainer';

const ProductView = () => {
    let { id } = useParams();
    const { data, loading, reFetch } = useFetch(`http://localhost:8080/api/products/${id}`);

    

    return (
        <Container>
            {
                loading ? (
                    <div className="loading">
                        <Loader/>
                    </div>
                ):(
                    <div className="container">
                        <ProductContainer data={data}/>
                    </div>
                )
            }
        </Container>
    )
}

export default ProductView


const Container = styled.section``