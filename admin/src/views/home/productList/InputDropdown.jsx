import React, { useState } from 'react'
import { styled } from 'styled-components'
import img from '../../../assets/arrow-down.svg'

const InputDropdown = ({changeCatergory, category}) => {

    const [state, setState] = useState(false);
    
    const categories = ['todos', 'lamparas', 'collares', 'sahumerios']

    const clickCategory = (item) => {
        setState(false)
        changeCatergory(item)
    }

    return (
        <Container className={state ? 'active' : ''}>
            <button className="primary" onClick={() => setState(!state)}>
                <span>{category}</span>
                <img src={img} alt="" />
            </button>
            <div>
                <ul>
                    {
                        categories.map(item => (
                            <li key={categories.indexOf(item)}>
                                <button onClick={() => clickCategory(item)}>{item}</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Container>
    )
}

export default InputDropdown

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
                button{
                    padding: 1rem;
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