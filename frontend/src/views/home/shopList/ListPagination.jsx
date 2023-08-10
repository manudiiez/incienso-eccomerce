import React from 'react'
import { styled } from 'styled-components'
import { Text } from '../../../styles/global'
import img from '../../../assets/arrow-down.svg'

const ListPagination = ({page, pages, changePage}) => {
    return (
        <Container>
            <button className={page - 1 <= 0 ? 'disabled' : ''} disabled={page - 1 <= 0} onClick={() => changePage(page - 1)}><img src={img} alt="" /></button>
            <button>{page}</button>
            <button className={!pages.includes(page + 1) ? 'disabled' : ''} disabled={!pages.includes(page + 1)} onClick={() => changePage(page + 1)}><img src={img} alt="" /></button>
        </Container>
    )
}

export default ListPagination

const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
margin-top: 3rem;
button{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    padding: .5rem;
    border: none;
    background-color: ${props => props.theme.gray};
    ${Text({ size: '1.3rem', color: props => props.theme.black, weight: '400' })};
    
    &:hover{
        background-color: ${props => props.theme.green};
    }
    
    &.disabled{
        opacity: .5;
        &:hover{
            background-color: ${props => props.theme.gray};
            cursor: default;
        }
    }
    
    &:first-child{
        img{
            transform: rotate(90deg);
        }
    }
    &:last-child{
        img{
            transform: rotate(-90deg);
        }
    }
    
}

`