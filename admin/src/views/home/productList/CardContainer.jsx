import React from 'react'
import Card from './Card'
import axios from 'axios'
import Swal from 'sweetalert2'

const CardContainer = ({ data }) => {

  const editItem = () => {

  }

  const deleteItem = () => {
    Swal.fire({
      position: 'top-end',
      title: `Eliminar ${data.nombre}?`,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#C84E47'
    }).then(async(result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        await axios.delete('http://localhost:8080/api/products/' + data._id)
        Swal.fire('Producto eliminado!', '', 'success')
      }
    })
  }

  return (
    <Card data={data} deleteItem={deleteItem} />
  )
}

export default CardContainer