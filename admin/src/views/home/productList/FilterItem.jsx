import React from 'react'
import styled from 'styled-components'
import { Text } from '../../../styles/global'
import { useState } from 'react';
import img from '../../../assets/search.svg'
import InputDropdown from './InputDropdown';


const FilterItem = ({ changeCatergory, category, changeSearch }) => {

    const [search, setSearch] = useState('');

    return (
        <Container>
            <div className="search">
                <input type="text" placeholder='Buscar por nombre' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <button onClick={() => changeSearch(search)}>
                    <img src={img} alt="" />
                </button>
            </div>
            {/* <button className='add'>Añadir</button> */}
            <div className="category">
                <p>Filtrar por: </p>
                <InputDropdown changeCatergory={changeCatergory} category={category} />
            </div>
        </Container>
    )
}

export default FilterItem

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .search{
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.gray};
        border-radius: 10px;
        gap: .5rem;
        height: 43px;
        input{
            width: 100%;
            border: none;
            background-color: transparent;
            padding: 1rem 0;
            padding-left: 1rem;
            color:  ${props => props.theme.black};
        }

        button{
            padding: 0 1rem;
            cursor: pointer;
            background-color: transparent;
            border: none;
            height: 100%;
            img{
                width: 1.3rem;
            }
        }

    }

    .category{
        display: flex;
        flex-direction: row;
        align-items: center;
        p{
            display: none;
            ${Text({ size: '1.3rem', color: props => props.theme.black, weight: '400' })};
        }
    }

    @media (min-width: 750px) {
        flex-direction: row-reverse;
        justify-content: space-between;

        .search{
            box-sizing: border-box;
            max-width: 450px;
        }

        .category{
            width: 100%;
            gap: 1rem;
            p{
                display: block;
            }

        }
    }

`
