import styled from "styled-components"
import SocialMedias from "./social-medias/SocialMedias"

export default function Footer() {
    return (
        <FooterContainer>
            <Content>
                <SocialMedias />
                <Credits className='credits'>
                    <div>Designed and Created by Rémi Martineau 2021.</div>
                    <div>All rights reserved.</div>
                </Credits>
            </Content>
        </FooterContainer>
    )
}

/*___Styling___*/
const FooterContainer = styled.footer`
    width: 100%;
    background-color: var(--black-secondary);
    padding: 1.5rem;
    padding-bottom: 1rem;

    @media screen and (min-width: 768px){
        padding: 2rem 2.5rem;
        padding-bottom: 1rem;
    }

    @media screen and (min-width: 1440px){
        padding: 2.5rem 0;
        padding-bottom: 1rem;
        margin-top: 5rem;
    }
`

const Content = styled.div`
    width: 100%;
    max-width: var(--layout-max-width);
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .social-medias{
        margin-bottom: 1.5rem;
    }

    @media screen and (min-width: 768px){
        
    }
`

const Credits = styled.div`
    font-size: 0.625rem;
    text-align: center;
    color: var(--white-secondary);

    @media screen and (min-width: 500px){
        display: flex;
        align-items: center;
        justify-content: center;

        div:first-child{
            margin-right: 0.25rem;
        }
    }
`