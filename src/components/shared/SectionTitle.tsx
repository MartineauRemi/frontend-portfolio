import React from 'react'
import styled from 'styled-components'

export const SectionTitle = React.forwardRef((props: any, ref: ((instance: HTMLHeadingElement | null) => void) | React.RefObject<HTMLHeadingElement> | null | undefined) => {
    return (
        <Title ref={ref} className='section-title'>
            {props.title}
            <Outline className="outline">
                {props.outline}
            </Outline>
        </Title>
    )
})

/*___styling___*/

const Title = styled.h2`
    position: relative;
    z-index: 1;
    font-weight: var(--fw-xbold);
    @media screen and (min-width: 768px){
        margin-top: 5rem;
    }
`

const Outline = styled.div`
    -webkit-text-stroke: 1px var(--gray);
    opacity: 0.3;
    font-weight: var(--fw-xbold);
    letter-spacing: 0.8px;
    color: transparent;
    position: absolute;
    left: 0;
    margin: 0;
    z-index: -1;
    top: -3rem;
    
    @media screen and (max-width: 550px){
        display: none;
    }

    @media screen and (min-width: 550px){
        font-size: 4.5rem;
    }


    @media screen and (min-width:768px){
        font-size: 5.75rem;
        top: -3.5rem;
    }

    @media screen and (min-width: 1250px){
        font-size: 7rem;
        top: -5rem;
    }
`