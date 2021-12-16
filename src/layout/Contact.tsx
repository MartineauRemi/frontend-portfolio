import { ReactElement } from 'react'
import styled from 'styled-components'
import email from '../assets/contact/email.svg'
import EmailAddress from '../components/contact/EmailAddress'
import { SectionTitle } from '../components/shared/SectionTitle'

export default function Contact(): ReactElement {
    return (
        <Wrapper id='contact'>
            <Content>
                <SectionTitle
                    outline='CONTACT'
                    title='CONTACT'
                />
                <Container>
                    <TextContent>
                        <Text>
                            Je suis à la recherche de nouvelles opportunités en tant que développeur front-end. Pourquoi ne pas travailler ensemble ?
                            Vous pouvez me contacter via les réseaux sociaux ou par mail à l'adresse ci-dessous :
                        </Text>
                        <EmailAddress />
                    </TextContent>
                    <Image src={email} alt='' aria-hidden='true' />
                </Container>
            </Content>
        </Wrapper>
    )
}

/*___Styling___*/
const Wrapper = styled.section`
    padding: 3rem 1.5rem;

    @media screen and (min-width: 768px){
        padding: 3.75rem 2.5rem;
    }

    @media screen and (min-width: 1440px){
        padding: 5rem 0;
    }
`

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    @media screen and (min-width: 1250px){
        flex-direction: row;
        justify-content: space-between;
    }
`

const Content = styled.div`
    width: 100%;
    max-width: var(--layout-max-width);
    margin: auto;

    @media screen and (max-width: 1249px){
        p{
            text-align: center;
        }
    }
`

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1250px){
        align-items: flex-start;
    }
`

const Text = styled.p`
    width: 100%;
    max-width: 32rem;
    margin-bottom: 1.5rem;

    @media screen and (min-width: 768px){
        margin-right: 4rem;
    }
`

const Image = styled.img`
    width: 220px;
    height: 220px;

    @media screen and (max-width: 767px){
        margin-bottom: 1.5rem;
    }

    @media screen and (min-width: 1100px){
        width: 400px;
        height: 400px;
    }
`
