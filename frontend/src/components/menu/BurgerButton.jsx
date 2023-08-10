import React, { useState } from 'react'
import { styled } from 'styled-components'

const BurgerButton = ({state, menuMethod}) => {



    return (
        <Container className="cell">
            <button onClick={menuMethod} className={`btn btn-3 js-btn ${state ? 'is-active' : ''}`}>
                <span className="burger burger__1" aria-hidden="true"></span>
                <span className="burger burger__2" aria-hidden="true"></span>
                <span className="text">Menu</span>
            </button>
        </Container>
    )
}

export default BurgerButton

const Container = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 200;

    @media (min-width: 950px) {
        display: none;
    }

    .btn { 
        background: transparent; // teal;
        padding: 0;
        border: none;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: relative;
        .burger {
            width: 30px;
            height: 3px;
            background-color: ${props => props.theme.black};
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .btn-3 {
        .burger__1,
        .burger__2 {
            transition: transform 0.2s ease-in-out, top 0.2s ease-in-out;
        }
        
        .burger__1 {
            top: 15%;
        }
        
        .text {
            text-transform: uppercase;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            top: 90%;
            /* background-color: ${props => props.theme.black}; */
            font-size: 0.65rem;
            opacity: 1;
            transition: opacity 0.2s ease-in-out;
        }
        
        &:hover {
            .burger__1,
            .burger__2 {
                background-color: ${props => props.theme.black};

            }
            
            .text {
                /* background-color: ${props => props.theme.black}; */
            }
        }
        
        &.is-active {  
            .burger__1 {
            top: 50%;
            transform:  translate(-50%, -50%) rotate(45deg);
            }

            .burger__2 {
            transform: translate(-50%, -50%) rotate(-45deg);
            }
            
            .text {
            opacity: 0;
            }
        }
    }

`