import React from 'react'
import { styled } from 'styled-components'
import trash from '../../assets/trash.svg'
import { Text } from '../../styles/global'
import ListPagination from '../pagination/ListPagination'
import { useNavigate } from 'react-router-dom'
import { useProduct } from '../../context/ProductContext'


const ProductList = ({ products, deleteProduct, page, setPage }) => {
    
    const navigate = useNavigate()
    const {pages} = useProduct()


    if (products.length === 0) return <ContainerNoTasks>No tasks</ContainerNoTasks>


    return (
        <Container>
            <div className="list">
                {
                    products.map(product => (
                        <ContainerCard key={product._id}>
                            <div className='data'>
                                <h1>{product.name}</h1>
                                <p>{product.price}$</p>
                            </div>
                            <div className="buttons">
                                <button className='edit' onClick={() => {navigate('/update/'+product._id)}}>Editar</button>
                                <button className='delete' onClick={() => deleteProduct(product._id)}>
                                    <img src={trash} alt="" />
                                </button>
                            </div>
                        </ContainerCard>
                    ))
                }
            </div>
            <ListPagination page={page} setPage={setPage} pages={pages} />
        </Container>
    )
}

export default ProductList

const Container = styled.div`

    .list{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }

`
const ContainerCard = styled.div`
    width: 100%;
    padding: 2rem;
    box-shadow: 0px 20px 45px 0px #EDF6EE;
    background-color: ${props => props.theme.white};
    border-radius: 10px; 
    .data{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1{
            ${Text({ size: '1.3rem', color: props => props.theme.black, weight: '500' })};
        }
        p{
            ${Text({ size: '1.2rem', color: "#10861B", weight: '700' })};
        }
    }
    
    .buttons{
        margin-top: 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        button{
            width: 100px;
            height: 40px;
            background-color: transparent;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            &.edit{
                background-color: ${props => props.theme.green};
            }
            &.delete{
                background-color: #C84E47;
            }
            img{
                width: 1%.5;
            }
        }
    }

    @media (min-width: 750px) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .data{
            width: fit-content;
            gap: 2rem;
            h1{
                font-size: 1.5rem;
            }
            p{
                font-size: 1.5rem;
            }
        }
        .buttons{
            margin:0;
        }
    }
`
const ContainerNoTasks = styled.div``