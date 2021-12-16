import styled from "styled-components"

export default function MainNav({onClickNavLink}: {onClickNavLink?: () => void}) {
    return (
        <nav className='main-nav'>
            <List>
                <li><Link href='#home' onClick={onClickNavLink}>Accueil</Link></li>
                <li><Link href='#about' onClick={onClickNavLink}>À Propos</Link></li>
                <li><Link href='#portfolio' onClick={onClickNavLink}>Portfolio</Link></li>
                <li><Link href='#contact' onClick={onClickNavLink}>Contact</Link></li>
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
    transition: all .3s ease-in-out;

    &:hover{
        color: var(--blue-primary);
    }
`