import React from 'react'
import styled from 'styled-components'
import { Text } from '../../styles/global'

const Credentials = ({ handleClick, handleChange, error, loading }) => {
    return (
        <Container>
            <div className="container">
                {/* <h1>Bienvenido a la aplicacion de reservas del colegio ETec</h1>
                <div className='container-form'>
                    <div className="header">
                        <div></div>
                        <p>Iniciar sesion</p>
                        <div></div>
                    </div>
                    <form>
                        <div>
                            <label>Nombre de usuario <span>*</span></label>
                            <input type="email" name="email" placeholder='Email de usuario' onChange={handleChange} />
                        </div>
                        <div>
                            <label>Contraseña <span>*</span></label>
                            <input type="password" name="password" placeholder='Contraseña' onChange={handleChange} />
                        </div>
                        {
                            error && <p className='error'>{error.message}</p>
                        }

                        <button type='submit' disabled={loading} onClick={handleClick}><span>Iniciar sesion</span></button>
                    </form>
                </div> */}

                <div className="form">
                    <h1>Iniciar sesion</h1>
                    <p>Solo para empleados de la tienda</p>
                    <form>
                        <div>
                            <label>Nombre de usuario <span>*</span></label>
                            <input type="email" name="email" placeholder='Email de usuario' onChange={handleChange} />
                        </div>
                        <div>
                            <label>Contraseña <span>*</span></label>
                            <input type="password" name="password" placeholder='Contraseña' onChange={handleChange} />
                        </div>

                        {
                            error && <p className='error'>{error.error}</p>
                        }

                        <button disabled={loading} type='submit' onClick={handleClick}>INICIAR SESION</button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Credentials

const Container = styled.section`
    background-color: ${props => props.theme.white};
    padding: 0 1rem;
    .container{
        min-height: calc(100vh - 100px);
        display: flex;
        justify-content: center; 
        align-items: center;
        flex-direction: column;
    }
    .form{
        box-sizing: border-box;
        width: 100%;
        max-width: 500px;
        border: 2px solid ${props => props.theme.green};
        border-radius: 20px;
        background-color: ${props => props.theme.white};
        padding: 2rem 1rem;
        display: block;
        h1{
            text-align: center;
            ${Text({ size: "2rem", color: props => props.theme.green, weight: '500' })};
            margin-bottom: 1rem;
        }
        p{
            text-align: center;
            margin-bottom: 3rem;
            ${Text({ size: "1.3rem", color: props => props.theme.black, weight: '500' })};
        }
        button{
            width: 100%;
            height: 50px;
            /* margin-top: 3rem; */
            border: none;
            background-color: transparent;
            background-color: ${props => props.theme.green};
            cursor: pointer;
            &:hover{
                background-color: #87aa96;
            }
        }
        .error{
            margin-bottom: 2rem;
            ${Text({ size: "1rem", color: "#ad0000", weight: '300' })};
             
        }
        div{
            display: flex;
            justify-content: center;
            align-items: self-start;
            flex-direction: column;
            gap: 1rem;
            label{
                ${Text({ size: "1rem", color: props => props.theme.black, weight: '500' })};
                span{
                    color: ${props => props.theme.green};
                }
            }
            input{
                box-sizing: border-box;
                width: 100%;
                height: 40px;
                padding: 0 1rem;
                border: none;
                background-color: transparent;
                border: 1px solid ${props => props.theme.black};
                border-radius: 10px;
            }
            margin-bottom: 2rem;
        }
    }
`