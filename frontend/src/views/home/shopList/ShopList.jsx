import React from 'react'
import { styled } from 'styled-components'
import Loader from '../../../components/loader/Loader'
import Card from '../../../components/card/Card';
import { Text } from '../../../styles/global';
import ListPagination from './ListPagination';

const ShopList = ({data, loading, changePage}) => {

    return (
        <Container>
            {
                loading ? (
                    <div className='loaderContainer'>
                        <Loader />
                    </div>
                ) : (
                    <div>
                        {
                            data.products && (

                                data.products.length === 0 ? (
                                    <div className='message'>
                                        No hay productos en este momento
                                    </div>
                                ):(
                                    <div className='content'>
                                        <div className="list">
                                            {
                                                data.products.map(item => (
                                                    <Card key={item._id} item={item}/>
                                                ))
                                            }
                                        </div>
                                        <ListPagination page={data.page} pages={data.pages} changePage={changePage} />
                                    </div>
                                )
                            )
                        }

                        
                    </div>
                )
            }



        </Container>
    )
}

export default ShopList

const Container = styled.div`
    width: 100%;
    min-height: 300px;

    .loaderContainer{
        height: 300px;
        width: 100%;
        display: flex;
        justify-content: center; 
        align-items: center;
    }
    

    .content{
        .list{
            display: grid;
            grid-template-columns: 1fr;
            align-items: center;
            justify-items: center;
            gap: 2rem;
            
            @media (min-width: 600px) {
                grid-template-columns: 1fr 1fr;
            }
            @media (min-width: 800px) {
                grid-template-columns: 1fr 1fr 1fr;
            }
            @media (min-width: 1000px) {
                grid-template-columns: 1fr 1fr 1fr 1fr;
            }
        }

        .pagination{
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
        }
    }
    
    .message{
        display: flex;
        justify-content: center; 
        align-items: center;
        height: 300px;
        width: 100%;
    }
`