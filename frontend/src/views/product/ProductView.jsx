import React from 'react'
import { styled } from 'styled-components'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/loader/Loader';
import ProductContainer from './ProductContainer';

const ProductView = () => {
    let { id } = useParams();
    const { data, loading, reFetch } = useFetch(`http://localhost:3000/api/products/${id}`);

    

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


const Container = styled.section`

    .loading{
        width: 100%;
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`