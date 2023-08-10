import React from 'react'
import styled from 'styled-components'
import CardContainer from './CardContainer'
import ListPagination from './ListPagination';


const ProductList = ({ data, loading, changePage }) => {
    return (
        <Container>
            {
                loading ? (
                    <p>loading</p>
                ) : (
                    // <CardContainer/>
                    data.products && (
                        <>
                            {

                                data.products.map(item => (
                                    <CardContainer key={item._id} data={item} />
                                ))
                            }
                            <ListPagination page={data.page} pages={data.pages} changePage={changePage} />
                        </>
                    )
                )

            }
        </Container>
    )
}
export default ProductList

const Container = styled.section`
    margin-top: 2rem;
`
