import { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    skill: {
        name: string;
        icon: ReactNode;
        color: string;
    }
}

export default function Skill({skill}: Props): ReactElement {
    return (
        <Container color={skill.color}>
            <Icon>
                {skill.icon}
            </Icon>
            <Name>{skill.name}</Name>
        </Container>
    )
}

/*___Styling___*/

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.color ? props.color : 'var(--black-secondary)'};
    width: 4rem;
    height: 4rem;
`

const Icon = styled.div`
    font-size: 2rem;
    @media screen and (min-width: 1250px){
        font-size: 2.5rem;
    }
`

const Name = styled.p`
    font-size: 0.825rem;
    position: absolute;
    bottom: -0.5rem;
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    transition: all .2s ease-in-out;
`
