import React from 'react'
import { styled } from 'styled-components'
import { Text } from '../../styles/global'
import check from '../../assets/check.svg'
import question from '../../assets/question.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagram from '../../assets/instagram.svg'

const AboutView = () => {
    return (
        <Container>
            <div className="container">
                <h1>Aromas que inspiran, envuelven y transforman tu espacio.</h1>
                <h2>Tienda online de productos para trabajar tu energía. Nuestra idea es darles un espacio seguro en el que puedan encontrarse, limpiar sus energías, relajarse, darse un tiempo para estar solos.</h2>

                <div className='pagos'>
                    <h3>Nuestros medios de pago</h3>
                    <ul>
                        <li>
                            <img src={check} alt="" />
                            <h4>Transferencia bancaria</h4>
                        </li>
                        <li>
                            <img src={check} alt="" />
                            <h4>Efectivo al recibir la mercaderia</h4>
                        </li>
                        <li>
                            <img src={check} alt="" />
                            <h4>Mercado pago</h4>
                        </li>
                    </ul>
                </div>
                <div className="medios">
                    <h5>¿Consultas?</h5>
                    <ul className='phone'>
                        <li>
                            <img src={whatsapp} alt="" />
                            <a href='#'>2615398585</a>
                        </li>
                        <li>
                            <img src={instagram} alt="" />
                            <a href='#'>incienso_</a>
                        </li>
                    </ul>
                    <ul className='pc'>
                        <li>
                            <img src={whatsapp} alt="" />
                            <h6>
                                No dudes en contactarnos al <a href='#'>2615398585</a>. Estamos aquí para brindarte toda la información que necesites
                            </h6>
                        </li>
                        <li>
                            <img src={instagram} alt="" />
                            <h6>También respondemos por <a href='#'>incienso_</a> nuestra cuenta de Instagram.</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default AboutView

const Container = styled.section`

    padding: 5rem 0;
    h1{
        ${Text({ size: '2.5rem', color: props => props.theme.black, weight: '400' })};
        position: relative;
        padding: 0 1rem;
        &::before{
            content: "";
            position: absolute;
            background-color: ${props => props.theme.green};
            width: 180px;
            height: 60px;
            top: 0;
            left: 0;
            z-index: -1;
        }
    }

    h2{
        ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '400' })};
        margin: 5rem 0;
    }

    .pagos{
        background-color: ${props => props.theme.green};
        padding: 2rem 1rem;
        h3{
            ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '400' })};
            margin-bottom: 2rem;
        }
        ul{
            display: flex;
            justify-content: center; 
            align-items: self-start;
            flex-direction: column;
            gap: 1rem;
            li{
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 1rem;
                h4{
                    ${Text({ size: '1.3rem', color: props => props.theme.black, weight: '300' })};
                }
            }
        }
    }

    .medios{
        background-color: ${props => props.theme.green};
        padding: 2rem 1rem;
        margin-top: 5rem;
        h5{
            ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '400' })};
            margin-bottom: 2rem;
        }
        ul{
            display: flex;
            justify-content: center; 
            align-items: self-start;
            flex-direction: column;
            gap: 1.5rem;
            li{
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 1rem;
                img{
                    width: 1.5rem;
                }
                a{
                    font-size: 1.3rem;
                    font-weight: 300;
                    color: #0365f8;
                    text-decoration: none;

                    &:hover{
                        text-decoration: underline;
                    }
                }
            }

            &.pc{
                display: none;
            }
        }
    }
    
    @media (min-width: 800px) {
        padding: 10rem 0;

        h1{
            text-align: center;
            &::before{
                width: 30%;
            }
        }

        h2{
            margin: 10rem 0;
            font-size: 2rem;
        }

        .pagos{
            padding: 5rem;
        }
        .medios{
            padding: 5rem;
            ul{
                &.phone{
                    display: none;
                }
                &.pc{
                    display: flex;
                    li{
                        align-items: start;
                        img{
                            margin-top: 5px;
                        }
                    }
                    h6{
                        ${Text({ size: '1.3rem', color: props => props.theme.black, weight: '300' })};
                    }
                }


            }
        }
    }


`