import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after{
        font-family: 'Poppins', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html{
        --layout-max-width: 69.375rem;

        //colors
        --black: #000000;
        --black-secondary: #0C0E16;
        --white: #ffffff;
        --white-secondary: #F8F8FB;
        --gray: #888EB0;        
        --blue-primary: rgba(97,99,255,1);;
        --blue-secondary: #94B3FD;
        --green-blue: #99FEFF;
        --purple: #B983FF;

        //font-weights
        --fw-regular: 400;
        --fw-medium: 500;
        --fw-bold: 700;
        --fw-xbold: 900;
    }
    
    li{
        list-style-type: none;
    }

    a, a:visited{
        text-decoration: none;
    }

    h1{
        font-size: 2.25rem;
        font-weight: var(--fw-xbold);

        @media screen and (min-width: 1024px){
            font-size: 3rem;
        }
    }

    h2{
        font-size: 1.75rem;
        font-weight: var(--fw-medium);

        @media screen and (min-width: 768px){
            font-size: 2.25rem;
        }
    }

    .mobile-only{
        @media screen and (min-width: 768px){
            display: none;
        }
    }
`