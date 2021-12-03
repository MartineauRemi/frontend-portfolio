import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after{
        font-family: 'Poppins', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        --layout-max-width: 69.375rem;

        //colors
        --black: #000000;
        --black-secondary: #0C0E16;
        --white: #ffffff;
        --white-secondary: #F8F8FB;
        --gray: #888EB0;        
        --blue-primary: #445bb6;

        //font-weights
        --fw-regular: 400;
        --fw-medium: 500;
        --fw-bold: 700;
    }
    
    li{
        list-style-type: none;
    }

    p{
        color: var(--gray);
    }

    a, a:visited{
        text-decoration: none;
    }


    .mobile-only{
        @media screen and (min-width: 768px){
        display: none;
    }
    }
`