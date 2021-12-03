import styled from "styled-components"
import { INavMenuProps } from "../../interfaces"
import Logo from "./Logo"
import NavMenu from "./navigation/NavMenu"
import { NavMenuButton } from "./Buttons"

export default function Header({navMenuActive, setNavMenuActive}: INavMenuProps){
    
    //toggles the mobile navigation menu
    const onClickNavMenuButton = ():void => setNavMenuActive(!navMenuActive)
    
    return(
        <HeaderContainer>
            <Wrapper>
                <Logo />
                <NavMenu />
                <NavMenuButton onClick={onClickNavMenuButton} />
            </Wrapper>
        </HeaderContainer>
    )
}

/*___Styling___*/

const HeaderContainer = styled.header`
    width: 100%;
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
        padding: 2.5rem 0;
    }
`