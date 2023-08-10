import { createGlobalStyle, css } from "styled-components"

export const theme = {
    green: "#98C1AA",
    black: "#292823",
    white: "#FDFDFD",
    gray: "#ECECEC"
}


export const Text = ({ size, color, weight }) => css`
    color: ${color};
    font-size: ${size};
    font-weight: ${weight};
`

export const GlobalStyles = createGlobalStyle`
    body{
        padding: 0 1.5rem;
    }
    .container{
        width: 100%;
        max-width: 1200px;
        margin: auto;
        box-sizing: border-box;
        @media (min-width: 1600px) {
            max-width: 1400px;
        }
    }

    
`