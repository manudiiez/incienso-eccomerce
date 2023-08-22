import React from 'react'
import { styled } from 'styled-components'
import logo from '../../assets/logo.svg'
import { Text } from '../../styles/global'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <Container>
            <div className="container">
                <div className="content">
                    <div>
                        <img src={logo} alt="" />
                        <p>INCIENSO</p>
                    </div>
                    <ul>
                        <li>
                            <Link to='/' >Inicio</Link>
                        </li>
                        <li>
                            <Link to='/orders' >Ordenes</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default Navbar

const Container = styled.nav`
    padding: 0 1rem;
    .content{
        padding: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        div{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 1rem;
        }
        a{
            ${Text({ size: '1.3rem', color: props => props.theme.black, weight: '500' })};
            text-decoration: none;
            &:hover{
                color: ${props => props.theme.green};
                text-decoration: underline;
            }
        }
        img{
            width: 40px;
        }
        p{
            ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '500' })};
        }

        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
    }

`