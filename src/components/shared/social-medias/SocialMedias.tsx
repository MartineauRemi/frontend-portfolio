import styled from 'styled-components'
import { Linkedin, Github, Twitter } from './SocialMediaIcons'

export default function SocialMedias(){
    return (
        <List className='social-medias'>
            <ListItem><Github /></ListItem>
            <ListItem><Linkedin /></ListItem>
            <ListItem><Twitter /></ListItem>
        </List>
    )
}

/*___Styling___*/
const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 3rem;
`

const ListItem = styled.li`
    transition: all .2s ease-in-out;
    &:hover{
        transform: scale(1.2);
    }
`