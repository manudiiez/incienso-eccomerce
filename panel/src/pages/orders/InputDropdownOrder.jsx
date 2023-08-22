import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import img from '../../assets/arrow-down.svg'
import x from '../../assets/x.svg'

const categories = [
    'nueva',
    'esperando pago',
    'pagada',
    'enviada',
    'terminada'
]

const InputDropdownOrder = ({ changeCategory, category }) => {

    const [state, setState] = useState(false);
    const [loading, setLoading] = useState(true);


    const clickCategory = (item) => {
        changeCategory(item)
        setState(false)
    }


    return (
        <Container className={state ? 'active' : ''}>
            <button type='button' className="primary" onClick={() => setState(!state)}>
                <span>{category}</span>
                <img src={img} alt="" />
            </button>
            <div>
                <ul>
                    <li>
                        <button type='button' onClick={() => clickCategory("todas")}>todas</button>
                    </li>
                    {
                        categories.map(item => (
                            <li key={categories.indexOf(item)}>
                                <button type='button' onClick={() => clickCategory(item)}>
                                    <span>{item}</span>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Container>
    )
}

export default InputDropdownOrder

const Container = styled.div`
    background-color: ${props => props.theme.gray};
    border-radius: 10px;
    width: 100%;
    height: 43px;
    position: relative;
    button{
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        cursor: pointer;
        img{
            transition: transform .3s ease-in-out
        }
        span{
            color:  ${props => props.theme.black};
        }
    }
    
    div{
        position: absolute;
        height: 0;
        overflow: hidden;
        background-color: ${props => props.theme.gray};
        width: 100%;
        border-radius: 10px;
        
        ul{
            li{
                display: flex;
                button{
                    padding: 1rem 0;
                    padding-left: 1rem;
                    width: 100%;
                }
                img{
                    padding-right: 1rem;
                    cursor: pointer;
                    width: 2rem;
                    &:hover{
                        transform: scale(1.05);
                    }
                }

                &.add{
                    background-color: ${props => props.theme.green};
                    cursor: pointer;

                }
            }
        }
    }
    &.active{
        button{
            img{
                transform: rotate(180deg);
            }
        }
        div{
            height: fit-content;
        }
    }

    @media (min-width: 750px) {
        max-width: 200px;
    }
`