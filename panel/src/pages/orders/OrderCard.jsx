import React from 'react'
import styled from 'styled-components'
import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'
import { Text } from '../../styles/global'
import {useNavigate} from 'react-router-dom'

dayjs.extend(utc)

const OrderCard = ({ data }) => {

  const navigate = useNavigate()


  return (
    <Container onClick={() => navigate('/order/'+data._id)}>
      <div className='cardHeader'>
        <p className={`state ${data.state === 'esperando pago' ? 'waiting' : data.state}`}>{data.state}</p>
        <div>
          <p className="id">manudiiez</p>
          <p className='date'>
            {dayjs(data.createdAt).utc().format('DD/MM/YYYY')}
          </p>
        </div>
      </div>

      <div className="cardBody">
        <p className='products'>Productos: <span>{data.order.length}</span></p>
        <p className='price'>subtotal: <span>{data.total} $</span></p>
      </div>
      <p className="phone">{data.phone}</p>
    </Container>
  )
}

export default OrderCard

const Container = styled.div`

  width: 100%;
  /* border: #000 1px solid; */
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 2rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: transform .3s ease-in-out;

  &:hover{
    transform: scale(1.03);
  }

  .cardHeader{
    .id{
      ${Text({ size: '1.2rem', color: props => props.theme.green, weight: '700' })};
    }
    .state{
      ${Text({ size: '1.2rem', color: props => props.theme.black, weight: '700' })};
      padding: 0.5rem 1rem;
      border-radius: 10px;
      margin-bottom: 1rem;
    }
    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
  }
  
  .cardBody{
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .products{
      ${Text({ size: '1rem', color: props => props.theme.black, weight: '700' })};
      span{
        font-weight: 500;
      }
    }
    .price{
      ${Text({ size: '1rem', color: props => props.theme.black, weight: '500' })};
      span{
        color: #10861B;
      }
    }
  }

  .phone{
    ${Text({ size: '1.2rem', color: props => props.theme.black, weight: '500' })};

  }

  @media (min-width: 950px) {
    .products{
      font-size: 1.3rem!important;
    }
    .price{
      font-size: 1.3rem!important;
    }
    
    .phone{
      font-size: 1.5rem!important;
    }
    .id{
      font-size: 1.5rem!important;
    }
    .state{
      font-size: 1.5rem!important;
    }
    .date{
      font-size: 1.3rem!important;
    }
  }

`