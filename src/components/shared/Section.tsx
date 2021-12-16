import React, { ReactElement, ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface Props {
    children: ReactNode;
    id?: string;
    background?: string;
    fullScreen?: boolean;

}

export default function Section({children, id, background, fullScreen}: Props): ReactElement {
    return (
        <Wrapper
            id={id}
            color={background}
            fullScreen={fullScreen}
        >
            <Container>
                {children}
            </Container>
        </Wrapper>
    )
}


/*___styling___*/

const Wrapper = styled.section<Props>`
    width: 100%;
    padding: 3rem 1.5rem 8rem 1.5rem;
    background: ${props => props.color ? props.color : 'var(--white)'};
    display: grid;

    ${props => props.fullScreen && css`
        height: 100vh;
    `};

    @media screen and (min-width: 768px){
        padding: 3.75rem 2.5rem 8.75rem 2.5rem;
        row-gap: 7.5rem;
    }

    @media screen and (min-width: 1440px){
        padding: 5rem 0 10rem 0;
        row-gap: 10rem;
    }
`

const Container = styled.div`
    place-self: center;
    width: 100%;
    max-width: var(--layout-max-width);
    display: grid;
    row-gap: 6rem;
`