import React, { useState } from 'react'
import { styled } from 'styled-components'
import FilterList from './FilterList'
import ShopList from './ShopList'
import useFetch from '../../../hooks/useFetch'

const ShopListContainer = () => {

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
            <FilterList changeCatergory={changeCatergory} category={category}  changeSearch={changeSearch} />
            <ShopList data={data} loading={loading} changePage={setPage}/>
        </Container>
    )
}

export default ShopListContainer

const Container = styled.div`
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    
    @media (min-width: 950px) {
        padding-top: 5rem;
        gap: 5rem;

    }
`