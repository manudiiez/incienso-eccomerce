import React from 'react'
import styled from 'styled-components'
import InputDropdownOrder from './InputDropdownOrder'

const OrderFilter = ({changeCategory, category}) => {

    return (
        <Container>
            <InputDropdownOrder changeCategory={changeCategory} category={category} />
        </Container>
    )
}

export default OrderFilter

const Container = styled.div``