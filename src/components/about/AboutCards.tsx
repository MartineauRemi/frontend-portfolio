import styled from 'styled-components'
import multiscreen from '../../assets/about/multiscreen.svg'
import developer from '../../assets/about/web-development.svg'
import sketch from '../../assets/about/sketch.svg'

export default function AboutCards() {
    
    return (
        <Wrapper className='about-cards'>
            <Card className='about-card'>
                <ImageContainer>
                    <Img src={multiscreen} alt=''/>
                </ImageContainer>
                <Text>
                    Je crée des sites web Responsive, Mobile-Friendly et qui respectent les normes SEO.
                </Text>
            </Card>
            <Card className='about-card'>
                <ImageContainer>
                    <Img src={developer} alt=''/>
                </ImageContainer>
                <Text>
                    Je travaille en Test Driven Development (TDD) avec un contrôle de version (git &amp; github). 
                </Text>
            </Card>
            <Card className='about-card'>
                <ImageContainer>
                    <Img src={sketch} alt=''/>
                </ImageContainer>
                <Text>
                    Je m'intéresse aussi au Back-End, à l'UX/UI et au Web Design pour construire des applications complètes.
                </Text>
            </Card>
        </Wrapper>
    )
}


/*___Styling___*/

const Wrapper = styled.ul`
    display: grid;
    row-gap: 5rem;

    @media screen and (min-width: 768px) and (max-width: 1249px){
        row-gap: 3.5rem;
    }

    @media screen and (min-width: 1249px){
        grid-template-columns: repeat(3, auto);
        column-gap: 2rem;
    }
`

const Card = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20rem;

    @media screen and (min-width: 768px) and (max-width: 1249px){
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 41.875rem;
    }

    @media screen and (min-width: 1250px){
        justify-content: space-between;
    }
`

const ImageContainer = styled.div`
    width: 4rem;
    height: 4rem;
    min-width: 4rem;
    min-height: 4rem;
    border-radius: 50%;
    background-color: var(--blue-primary);
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px) and (max-width: 1249px){
        margin-bottom: 0;
        margin-right: 2rem;
    }
`

const Img = styled.img`
    width: 2rem;
    height: 2rem;
`

const Text = styled.p`
    text-align: center;

    @media screen and (min-width: 768px) and (max-width: 1249px){
        text-align: left;
    }
`