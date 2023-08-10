import React from 'react'
import styled from 'styled-components'
import ProductListContainer from './productList/ProductListContainer'

const HomeView = () => {

    return (
        <Container>

            <ProductListContainer/>
        </Container>
    )
}

export default HomeView

const Container = styled.section``