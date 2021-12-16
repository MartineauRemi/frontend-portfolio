import styled from 'styled-components'
import webDeveloper from '../assets/about/web-developer.svg'
import Skillset from '../components/skillset/Skillset'
import AboutCards from '../components/about/AboutCards'
import Section from '../components/shared/Section'
import { SectionTitle } from '../components/shared/SectionTitle'

export default function About(){

    return (
        <Section id='about'>
            <SectionTitle
                outline='ABOUT'
                title='À PROPOS'
            />
            
            <AboutContent>
                <Image src={webDeveloper} alt='' aria-hidden='true'/>
                <TextContainer>
                    <Text>
                        Passionné par le front-end et le web-design, je développe des applications web et mobile dynamiques et esthétiques.
                        Voici les langages et frameworks que j'utilise aujourd'hui:
                    </Text>
                    <Skillset />
                </TextContainer>
            </AboutContent>
            <CardsContainer>
                <AboutCards /> 
            </CardsContainer>
        </Section>
    )
}

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1250px){
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-start;
    }
`

const Image = styled.img`
    width: 200px;
    height: 200px;

    @media screen and (min-width: 768px){
        width: 300px;
        height: 300px;
    }

    @media screen and (min-width: 1024px){
        width: 350px;
        height: 350px;
    }

    @media screen and (min-width: 1250px){
        width: 400px;
        height: 400px;
        position: relative;
        top: -2rem;
    }
`

const Text = styled.p`
    margin-bottom: 6rem;
    @media screen and (max-width: 1249px){
        text-align: center;
        max-width: 59.5rem;
    }

    @media screen and (min-width: 1024px) and (max-width: 1249px){
        margin-bottom: 2.5rem;
    }

    @media screen and (min-width: 1250px){
       margin-bottom: 3rem;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 1250px){
        align-items: flex-start;
    }
`

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`