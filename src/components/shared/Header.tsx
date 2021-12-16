import styled from "styled-components"
import { INavMenuProps } from "../../interfaces"
import Logo from "./Logo"
import NavMenu from "./navigation/NavMenu"
import { NavMenuButton } from "./Buttons"

export default function Header({navMenuActive, setNavMenuActive, scrolled}: INavMenuProps){
    
    //toggles the mobile navigation menu
    const onClickNavMenuButton = ():void => setNavMenuActive(!navMenuActive)
    
    return(
        <HeaderContainer scrolled={scrolled}>
            <Wrapper>
                <Logo />
                <NavMenu />
                <NavMenuButton onClick={onClickNavMenuButton} />
            </Wrapper>
        </HeaderContainer>
    )
}

/*___Styling___*/

const HeaderContainer = styled.header<{scrolled: boolean}>`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${props => props.scrolled ? 'var(--white)' : 'transparent'};
    border-bottom: ${props => props.scrolled ? '1px solid rgba(200,200,200, 0.3)' : 'none'};
    transition: all .2s ease-in-out;
    z-index: 5;
`

const Wrapper = styled.div`
    max-width: var(--layout-max-width);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;

    @media screen and (min-width: 768px){
        padding: 2rem 2.5rem;
    }

    @media screen and (min-width: 1440px){
        padding: 2rem 0;
    }
`