import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Swal from 'sweetalert2'

import img from '../../assets/arrow-down.svg'
import x from '../../assets/x.svg'
import { createCategoryRequest, deleteCategoryRequest, getCategoriesRequest } from '../../api/category'
import Loader from '../loader/Loader'

const InputDropdown = ({ changeCatergory, category }) => {

    const [state, setState] = useState(false);
    const [deletedState, setDeletedState] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCategories = async () => {
        const res = await getCategoriesRequest()
        setCategories(res.data)
        setLoading(false)
    }

    const clickCategory = (item) => {
        setState(false)
        changeCatergory(item)
    }

    const clickAddCategory = () => {
        Swal.fire({
            title: 'Nombre de la categoria',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Crear',
            showLoaderOnConfirm: true,
            preConfirm: async(name) => {
                try {
                    return await createCategoryRequest({name: name})
                } catch (error) {
                    console.log(error);
                    Swal.showValidationMessage(
                        `debe completar el campo nombre`
                    )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                setState(!state)
                setDeletedState(!deletedState)
                Swal.fire('Creado correctamente', '', 'success')

            }
        })
    }

    const clickDeleteCategory = (id) => {
        Swal.fire({
            title: 'Confirmar eliminación',
            position: 'top-end',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            confirmButtonColor: '#C84E47',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                deleteCategoryRequest(id)
                setState(!state)
                setDeletedState(!deletedState)
                Swal.fire('Eliminado correctamente', '', 'success')
            }
        })
    }

    useEffect(() => {
        getCategories()
    }, [deletedState])

    return (
        <Container className={state ? 'active' : ''}>
            <button type='button' className="primary" onClick={() => setState(!state)}>
                <span>{category}</span>
                <img src={img} alt="" />
            </button>
            <div>
                <ul>
                    {
                        !loading && (
                            <li>
                                <button type='button' onClick={() => clickCategory("todos")}>todos</button>
                            </li>
                        )
                    }
                    {
                        loading ? (
                            <Loader />
                        ) : (

                            categories.map(item => (
                                <li key={categories.indexOf(item)}>
                                    <button type='button' onClick={() => clickCategory(item.name)}>
                                        <span>{item.name}</span>
                                    </button>
                                    <img src={x} alt="" onClick={() => clickDeleteCategory(item._id)} />
                                </li>
                            ))
                        )
                    }
                    {
                        !loading && (
                            <li className='add'>
                                <button type='button' onClick={() => clickAddCategory()}>Añadir</button>
                            </li>
                        )
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