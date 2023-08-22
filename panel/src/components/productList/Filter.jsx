import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import img from '../../assets/search.svg'
import InputDropdown from '../input/InputDropdown'
import { Text } from '../../styles/global'
import {Link} from 'react-router-dom'

const Filter = ({ changeCatergory, category, changeSearch }) => {

    const [search, setSearch] = useState('');


    return (
        <Container>
            <div className='searchContent'>
                <div className="search">
                    <input type="text" placeholder='Buscar por nombre' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                    <button onClick={() => changeSearch(search)}>
                        <img src={img} alt="" />
                    </button>
                </div>
                <Link className='add' to='/add'>Añadir</Link>
            </div>
            <div className="category">
                <p>Filtrar por: </p>
                <InputDropdown changeCatergory={changeCatergory} category={category}/>
            </div>
        </Container>
    )
}

export default Filter

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .searchContent{
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        .add{
            height: 43px;
            padding: 0 1rem;
            cursor: pointer;
            border: none;
            background-color: ${props => props.theme.green};
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            ${Text({ size: '1rem', color: props => props.theme.black, weight: '500' })};

        }   
    }
    .search{
        width: 100%;
        box-sizing: border-box;
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
        
        .searchContent{
            justify-content: flex-end;
        }


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