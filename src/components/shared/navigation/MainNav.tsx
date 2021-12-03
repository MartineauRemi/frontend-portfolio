import styled from "styled-components"

export default function MainNav() {
    return (
        <nav className='main-nav'>
            <List>
                <li><Link href='#home'>Accueil</Link></li>
                <li><Link href='#about'>À Propos</Link></li>
                <li><Link href='#portfolio'>Portfolio</Link></li>
                <li><Link href='#contact'>Contact</Link></li>
            </List>
        </nav>
    )
}

const List = styled.ul`
    display: grid;
    row-gap: 3rem;
    @media screen and (min-width: 768px){
        grid-template-columns: repeat(4, auto);
        column-gap: 3rem;
    }
`

const Link = styled.a`
    color: var(--black-secondary);
    font-size: 1.125rem;
    font-weight: var(--fw-bold);
    line-height: 1.5rem;
    letter-spacing: -0.25px;
`