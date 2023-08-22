import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import Swal from 'sweetalert2'

import { useProduct } from '../../context/ProductContext'
import Filter from './Filter';
import ProductList from './ProductList';

const ProductListContainer = () => {

    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("todos");
    const [search, setSearch] = useState('');

    const { getProducts, deleteProduct, products, change } = useProduct()

    const deleteProductClick = (id) => {
        Swal.fire({
            title: 'Confirmar eliminación',
            position: 'top-end',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            confirmButtonColor: '#C84E47',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                deleteProduct(id)
                Swal.fire('Eliminado correctamente', '', 'success')
            }
        })
    }

    useEffect(() => {
        getProducts(search, category, page)
    }, [change, page, search, category])

    useEffect(() => {
        setPage(1)
    }, [search, category])

    return (
        <Container>
            <div className="container">
                <Filter changeCatergory={setCategory} category={category} changeSearch={setSearch} />
                <ProductList products={products} deleteProduct={deleteProductClick} page={page} setPage={setPage} />
            </div>
        </Container>
    )
}

export default ProductListContainer

const Container = styled.div`
    padding: 0 1rem;
    .container{
        display: flex;
        flex-direction: column;
        gap: 5rem;
    }
`