import React from 'react'
import ProductList from './ProductList'
import { useState } from 'react';
import useFetch from '../../../hooks/useFetch'
import { styled } from 'styled-components';
import FilterItem from './FilterItem';


const ProductListContainer = () => {

    const [category, setCategory] = useState('todos');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const { data, loading, reFetch } = useFetch(`http://localhost:8080/api/products?category=${category}&search=${search}&page=${page}`);


    const changeCatergory = (value) => {
        setPage(1)
        setCategory(value)
    }

    const changeSearch = (value) => {
        setPage(1)
        setSearch(value)
    }
    return (
        <Container>
            <div className="container">
                <FilterItem changeCatergory={changeCatergory} category={category} changeSearch={changeSearch} />
                <ProductList data={data} loading={loading} changePage={setPage} />
            </div>
        </Container>
    )
}

export default ProductListContainer


const Container = styled.section`
    padding: 0 1rem;
`

