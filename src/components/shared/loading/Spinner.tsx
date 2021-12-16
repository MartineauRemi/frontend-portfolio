import { ReactElement } from 'react'
import styled from 'styled-components'

export default function Spinner(): ReactElement {
    return (
        <Wrapper>
            <Circle />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    @keyframes rotation{
        from{
            transform: rotate(0deg);
        }to{
            transform: rotate(360deg);
        }
    }
    width: 100px;
    height: 100px;
    animation: rotation 1s linear infinite;
`

const Circle = styled.div`
    width: 100%;
    height: 100%;

    border-radius: 50%;
    border-left: 2px solid var(--blue-primary);
`