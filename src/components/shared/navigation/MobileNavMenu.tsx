import styled from "styled-components"
import MainNav from "./MainNav"
import { INavMenuProps } from '../../../interfaces'
import { CloseButton } from '../Buttons'
import { gsap } from 'gsap'
import { useEffect, useRef } from "react"
import SocialMedias from "../social-medias/SocialMedias"

export default function MobileNavMenu({navMenuActive, setNavMenuActive}: INavMenuProps) {
    //used for menu toggle animation
    const mobileNavMenuRef = useRef(null)

    const onClickCloseButton = () => {
        gsap.to(
            mobileNavMenuRef.current,
            {
                duration: .3,
                left: '-100%'
            }
        )
        setTimeout(() => setNavMenuActive(false), 300)
    }

    useEffect(() => {
        if(navMenuActive){
            gsap.to(
                mobileNavMenuRef.current,
                {
                    duration: .3,
                    left: 0
                }
            )   
        }
    })

    return (
        navMenuActive ?
            (
                <Wrapper
                    className='mobile-nav-menu mobile-only'
                    ref={mobileNavMenuRef}
                >
                    <Content>
                        <CloseButtonContainer>
                            <CloseButton onClick={onClickCloseButton} />
                        </CloseButtonContainer>
                        <MainNav />
                        <SocialMedias />
                    </Content>
                </Wrapper>
            )
            : null
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: -100%;
    background-color: var(--black-secondary);
    padding: 1.5rem;
`

const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .main-nav{
        margin-bottom: 6rem;
    }

    a{
        color: var(--white-secondary);
        
        &:hover{
            color: var(--white);
        }
    }

`

const CloseButtonContainer = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
`
