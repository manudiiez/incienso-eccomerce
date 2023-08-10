import React from 'react'
import { styled } from 'styled-components'
import { Text } from '../../styles/global'

const Title = ({ width, font, fontpc, text }) => {


    const Container = styled.div`

        h2{
            ${Text({ size: props => props.font, color: props => props.theme.black, weight: '500' })};
            padding-left: 2rem;
            display: inline-block;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: ${props => props.value}%;
                background-color: ${props => props.theme.green};
                z-index: -1;
            }
        }

        @media (min-width: 950px) {
            h2{
                ${Text({ size: props => props.fontpc, color: props => props.theme.black, weight: '500' })};
            }
        }

    
    `

    return (
        <Container value={width} font={font} fontpc={fontpc}>
            <h2>{text}</h2>
        </Container>
    )
}

export default Title
