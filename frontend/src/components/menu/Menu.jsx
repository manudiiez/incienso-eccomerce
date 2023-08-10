import React from 'react'
import { styled } from 'styled-components'
import cart from '../../assets/shopping-cart.svg'
import logo from '../../assets/logo.svg'
import BurgerButton from './BurgerButton'
import { Text } from '../../styles/global'
import { Link, NavLink } from 'react-router-dom'

const Menu = ({ state, menuMethod, cartCant}) => {


    return (
        <Container>
            <div className="content">
                <div className="container">
                    <BurgerButton state={state} menuMethod={menuMethod} />
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>INCIENSO</p>
                    </div>
                    <menu className={state ? 'active' : ''}>
                        <ul>
                            <li>
                                <NavLink onClick={menuMethod} to="/">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={menuMethod} to="/">Tienda</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={menuMethod} to="/about">Nosotros</NavLink>
                            </li>
                        </ul>
                    </menu>
                    <Link to="/cart">
                        <span>{cartCant}</span>
                        <img src={cart} alt="" />
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Menu

const Container = styled.div`
    width: 100%;
    height: 100px;
    .content{
        padding: 0 1.5rem;
        left: 0;
        position: fixed;
        z-index: 1;
        width: calc(100%);
        background-color: ${props => props.theme.white};
        box-sizing: border-box;
    }
    .container{
        padding: .5rem 0;
        width: calc(100%);
        display: flex;
        align-items: center;
        gap: 1rem;
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
            ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '400' })};
            img{
                width: 40px;
            }
        }   
        a{
            background-color: transparent;
            border: none;
            margin-left: auto;
            cursor: pointer;
            position: relative;
            span{
                ${Text({ size: '.9rem', color: props => props.theme.black, weight: '500' })};
                position: absolute;
                width: 18px;
                height: 18px;
                background-color: ${props => props.theme.green};
                top: -.4rem;
                right: -.5rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        menu{
            z-index: 190;
            position: absolute;
            top: 0;
            left: -150%;
            width: 100vw;
            background-color: ${props => props.theme.white};
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            opacity: 0;
            transition: left .5s ease-in-out, opacity .8s ease-in-out;

            &.active{
                left: 0;
                opacity: 1;
            }

            ul{
                width: 100%;
                li{
                    text-align: center;
                    a{
                        padding: 1rem 0;
                        text-decoration: none;
                        display: block;
                        ${Text({ size: '2rem', color: props => props.theme.black, weight: '500' })};
                        &:hover{
                            background-color: ${props => props.theme.gray};
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 950px) {
        .container{
            padding: 1rem 0;
            gap: 5rem;
            menu{
                position: relative;
                width: fit-content;
                height: fit-content;
                opacity: 1;
                left: 0;
                ul{
                    display: flex;
                    flex-direction: row;
                    justify-content: center; 
                    align-items: center;
                    gap: 2rem;
                    li{
                        a{
                            ${Text({ size: '1.3rem', color: props => props.theme.black, weight: '400' })};
                            padding: 0;
                            &:hover{
                                background-color: transparent;
                                text-decoration: underline;
                                color: ${props => props.theme.green};
                            }
                        }
                    }
                }
            }


        }


    }
`