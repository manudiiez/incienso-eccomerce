import React from 'react'
import { styled } from 'styled-components'
import img from '../../assets/img1.svg'
import { Text } from '../../styles/global'

const Initial = () => {
    return (
        <Container>
            <div className="container">
                <div className='text'>
                    <h1>Espacio <span>energético</span> y de aromaterapia. </h1>
                </div>
                <div className="img">
                    <div></div>
                    <img src={img} alt="" />
                </div>
            </div>
        </Container>
    )
}

export default Initial

const Container = styled.section`
    .container{
        padding: 10rem 0;
        display: flex;
        flex-direction: column;
        gap: 5rem;
        .text{
            h1{
                ${Text({ size: '3rem', color: props => props.theme.black, weight: '400' })};
                span{
                    color: ${props => props.theme.green};
                    text-decoration: underline;
                }
            }
        }

        .img{
            position: relative;
            display: flex; 
            justify-content: end;
            align-items: center;
            div{
                z-index: -1;
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 50%;
                background-color: ${props => props.theme.green};
            }
            img{
                width: 80%;
                padding: 4rem 0;
                padding-top: 2rem;
                max-width: 420px;
            }
        }

        @media (min-width: 650px) {
            .img{
                div{
                    width: 65%;
                }
            }
        }
        
        @media (min-width: 800px) {
            padding: 0;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .img{
                div{
                    width: 45%;
                }
                img{
                    width: 100%;
                }
            }
        }
        @media (min-width: 1400px) {

            .text{
                h1{
                    ${Text({ size: '3.5rem', color: props => props.theme.black, weight: '400' })};

                }
            }

            .img{
                padding-left: 3rem;
                div{
                    width: 50%;
                }
                img{
                    padding: 8rem 0;
                    width: 420px;
                }
            }
        }


    }

`