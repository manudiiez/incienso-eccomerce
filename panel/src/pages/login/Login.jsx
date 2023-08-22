import React from 'react'
import styled from 'styled-components'
import { Text } from '../../styles/global'

const Login = ({ onSubmit, register, LoginErrors, formErrors }) => {
    return (
        <Container>
            <form onSubmit={onSubmit}>
                <h1>Inicio de sesión</h1>
                <p>Solo para empleados de la tienda</p>
                <div>
                    <input
                        type="email"
                        name='email'
                        placeholder='Ingrese su email'
                        {...register('email', { required: true })}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name='password'
                        placeholder='Ingrese su contraseña'
                        {...register('password', { required: true })}
                    />
                    <div className='errors'>
                        {formErrors.email && <p>Email requerido</p>}
                        {formErrors.password && <p>Contraseña requerida</p>}
                        {
                            LoginErrors.map((err, i) => (
                                <p key={i}>{err}</p>
                            ))
                        }
                    </div>
                </div>

                <button>Iniciar</button>
            </form>
        </Container>
    )
}

export default Login

const Container = styled.section`
    background: linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147));
    padding: 0 1rem;
    height: 100%;
    min-height: calc(100vh - 66.39px);
    display: flex;
    justify-content: center;
    align-items: center;

     
    form{
        background-color: ${props => props.theme.white};
        display: inline-block;
        padding: 5rem 2rem;
        width: 100%;
        max-width: 500px;
        h1{
            text-align: center;
            ${Text({ size: '1.5rem', color: props => props.theme.black, weight: '700' })};
            margin-bottom: 1rem;
        }
        p{
            text-align: center;
            ${Text({ size: '1rem', color: props => props.theme.black, weight: '400' })};
            margin-bottom: 2rem;
        }
        div{
            position: relative;
            &:nth-of-type(1){
                margin-bottom: 1rem;
            }
            &:nth-of-type(2){
                padding-bottom: 4rem;
            }
            input{
                width: 100%;
                border: none;
                background-color: ${props => props.theme.gray};
                padding: 1rem;
                border-radius: 15px;

            }
            .errors{
                margin: 0;
                position: absolute;
                padding-top: 1rem;
                padding-left: .5rem;
                p{
                    margin:0;
                    text-align: start;
                    ${Text({ size: '.8rem', color: "#C84E47", weight: '400' })};
                }
            }
        }

        button{
            cursor: pointer;
            width: 100%;
            border: none;
            padding: 1rem;
            background-color: ${props => props.theme.green};

            &:hover{
                background-color: ${props => props.theme.green2};
            }
        }
    }
`