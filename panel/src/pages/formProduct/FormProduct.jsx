import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useForm } from 'react-hook-form'
import InputDropdown from '../../components/input/InputDropdown'
import { Text } from '../../styles/global'
import { useProduct } from '../../context/ProductContext'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import Loader from '../../components/loader/Loader'

const FormProduct = () => {

  const [category, setCategory] = useState('collares');
  const [file, setFile] = useState("");
  const [previusImage, setPreviusImage] = useState('');
  const { register, handleSubmit, setValue } = useForm()
  const { createProduct, errors, loading, getProduct, updateProduct } = useProduct()
  const navigate = useNavigate()
  const params = useParams()



  const categories = ['lamparas', 'collares', 'sahumerios']


  const onSubmit = handleSubmit(async (values) => {
    setValue('category', category)
    if (params.id) {
      await updateProduct(params.id, values, file, previusImage)
    } else {
      await createProduct(values, file)
    }
    if (errors.length === 0) {
      let timerInterval
      Swal.fire({
        title: `Producto ${params.id ? 'editado' : 'creado'} correctamente`,
        timer: 1000,
        timerProgressBar: true,
        icon: 'success',
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then(() => {
        navigate('/')
      })
    } else {
      console.log(errors);
    }
  })

  useEffect(() => {
    setValue('category', category)
  }, [category])


  useEffect(() => {
    const loadProduct = async () => {
      console.log(params.id);
      if (params.id) {
        const product = await getProduct(params.id)
        setValue('name', product.name)
        setValue('description', product.description)
        setValue('price', product.price)
        setCategory(product.category)
        setFile(product.image)
        setPreviusImage(product.image)
      }
    }
    loadProduct()
  }, [])

  return (
    <Container>
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className='input'>
            <label htmlFor="name">Nombre</label>
            <input type="text" {...register('name')} />
          </div>
          <div className='input'>
            <label htmlFor="description">Descripción</label>
            <input type="text" {...register('description')} />
          </div>
          <div className='input'>
            <label htmlFor="price">Precio</label>
            <input type="number" {...register('price')} />
          </div>
          <div className='input'>
            <label htmlFor="category">Categoria</label>
            <InputDropdown changeCatergory={setCategory} category={category} categories={categories} />
          </div>
          <div className='input'>
            <label htmlFor="image">Imagen</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <button className='add'>{params.id ? 'Editar' : 'Crear'}</button>
          <div className={`loading ${loading && 'active'}`}>
            <Loader />
          </div>
        </form>
      </div>
    </Container>
  )
}

export default FormProduct

const Container = styled.section`

  background-color: ${props => props.theme.green};
  height: 100%;
  min-height: calc(100vh - 66.39px);
  padding: 5rem 1rem;

  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    form{
      background-color: ${props => props.theme.white};
      padding: 3rem 2rem;
      display: flex;
      justify-content: center;
      align-items: stretch;
      gap: 2rem;
      flex-direction: column;
      position: relative;
      
      .loading{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${props => props.theme.white};
        display: none;
        justify-content: center;
        align-items: center;
        
        &.active{
          display: flex;
        }
      }

      .input{
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        input{
          width: 100%;
          border: none;
          background-color: ${props => props.theme.gray};
          padding: 1rem;
          border-radius: 15px;
        }
        label{
          ${Text({ size: '1rem', color: props => props.theme.black, weight: '400' })};
          margin-bottom: .5rem;
        }
      }

      .add{
        padding: 1rem;
        border-radius: 10px;
        border: none;
        background-color: ${props => props.theme.green};
        cursor: pointer;
      }
    }
  }


`