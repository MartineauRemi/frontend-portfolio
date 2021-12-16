import React, { ReactElement } from 'react'
import styled from 'styled-components'
import hero from '../assets/hero/hero.svg'
import blob from '../assets/hero/blob.svg'
import { BlueButton, OutlineButton } from '../components/shared/Buttons'
import Section from '../components/shared/Section'
import ScrollCTA from '../components/shared/navigation/ScrollCTA'

export default function Hero(): ReactElement {
    return (
        <Wrapper>
        <Section id='home' background='linear-gradient(160deg, #accbee 0%, #e7f0fd 100%)' fullScreen>
            <Content>
                <Heading>
                    <h1>RÉMI MARTINEAU</h1>
                    <h2>Front-End Developer</h2>
                    <Container>
                    <a href='#contact'><OutlineButton>Contact</OutlineButton></a>
                    <a href='#portfolio'><BlueButton>Portfolio</BlueButton></a>
                    </Container>
                </Heading>
                <ImageContainer>
                    <Image src={hero} alt='front-end web developer'/>
                    <Blob src={blob} alt='' aria-hidden='true'/>
                </ImageContainer>
            </Content>
        </Section>
            
            <ScrollCTAContainer>
                <ScrollCTA />
            </ScrollCTAContainer>
        </Wrapper>
    )  
}

/*___styling___*/

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
`

const Content = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1024px){
        flex-direction: row;
        justify-content: space-between;
    }
`

const Heading = styled.div`
    h2{
        color: var(--black-secondary);
        font-weight: var(--fw-medium);
        text-align: center;

        @media screen and (min-width: 1024px){
            text-align: left;
            font-size: 2rem;
        }
    }
    
`

const ScrollCTAContainer = styled.div`
    position: absolute;
    bottom: 1.5rem;
    left: calc(50% - 50px);

    @media screen and (max-width: 767px){
        display: none;
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    a:first-child{
        margin-right: 1rem;
    }

    @media screen and (min-width: 1024px){
        justify-content: flex-start;
    }
`

const ImageContainer = styled.div`
    position: relative;
    z-index: 1;
`

const Image = styled.img`
    width: 80vw;
    height: 80vw;

    @media screen and (min-width: 768px){
        width: 375px;
        height: 375px;
    }

    @media screen and (min-width: 1024px){
        width: 425px;
        height: 425px;
    }

    @media screen and (min-width: 1440px){
        width: 550px;
        height: 550px;
    }
`

const Blob = styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    transform: rotate(180deg);
    z-index: -1;
`