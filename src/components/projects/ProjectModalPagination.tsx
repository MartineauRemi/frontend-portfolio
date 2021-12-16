import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface Props {
    numberOfItems: number;
    index: number;
}


export default function ProjectModalPagination({numberOfItems, index}: Props): ReactElement {
    return (
        <Wrapper>
            <Progress numberOfItems={numberOfItems} index={index}/>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 100%;
    text-align: center;
`

const Progress = styled.div<Props>`
    height: 1px;
    width: 100%;
    background-color: var(--gray);
    margin-bottom: 1.5rem;
    position: relative;

    &::after{
        content: '';
        width: ${props => (props.numberOfItems && props.index) && `calc((100% / ${props.numberOfItems}) * (${props.index} + 1))`};
        height: 3px;
        background-color: var(--blue-primary);
        border-radius: 0 1rem 1rem 0;
        position: absolute;
        top: -1px;
        left: 0;
        transition: all .3s ease-in-out;
    }
`