import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { Text } from '../../styles/global'

const MenuContainer = () => {
    return (
        <Container>
            <div className="content">
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>INCIENSO</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MenuContainer

const Container = styled.div`
    height: 60px;
    width: 100%;
    .content{
        background-color: ${props => props.theme.white};
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        padding: .5rem 1rem;
        box-sizing: border-box;
        .container{
            .logo{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 1rem;
                img{
                    width: 40px;
                }
                p{
                    ${Text({ size: "1.3rem", color: props => props.theme.black, weight: '500' })};
                }
            }
        }
    }

`