import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { skillset } from '../../data/skillset'
import Skill from './Skill'

export default function Skillset(): ReactElement {
    return (
        <List>
            {skillset.map((skill, index) => (
                <ListItem key={index}>
                    <Skill skill={skill} />
                </ListItem>
            ))}
        </List>
    )
}

/*___Styling___*/

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 2rem);
    row-gap:  2rem;
    column-gap: 4rem;

    @media screen and (min-width: 1024px){
        row-gap: 4rem;
        column-gap: 4rem;
        grid-template-columns: repeat(5, auto);
    }

    @media screen and (min-width: 1024px) and (max-width: 1249px){
        margin-bottom: 2.5rem;
    }
`

const ListItem = styled.li`
    place-self: center;

    @media screen and (max-width: 1023px){
        &:nth-child(2), &:nth-child(5), &:nth-child(8), &:nth-child(10){
            position: relative;
            top: -1.5rem;
        }

        &:nth-child(10){
            grid-column: 2 / 3;
        }

    }
    @media screen and (min-width: 1024px){
        &:nth-child(2), &:nth-child(4), &:nth-child(7), &:nth-child(9){
            position: relative;
            top: 2.5rem;
        }
    }
`