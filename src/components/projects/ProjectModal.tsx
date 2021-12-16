import React, { Dispatch, ReactElement, SetStateAction, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { IProject } from '../../interfaces'
import { projects } from '../../data/projects'
import { CloseButton, OutlineButton, BlueButton, Button } from '../shared/Buttons'
import iconArrowDown from '../../assets/hero/icon-arrow-down.svg'
import ProjectModalPagination from './ProjectModalPagination'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

interface Props {
    setProjectModalOpen: Dispatch<SetStateAction<boolean>>;
    selectedProject: IProject | null;
    setSelectedProject: Dispatch<SetStateAction<IProject | null>>;
}

export default function ProjectModal({setProjectModalOpen, selectedProject, setSelectedProject}: Props): ReactElement {
    gsap.registerPlugin(ScrollTrigger)
    const modalRef = React.createRef<any>()

    const q = gsap.utils.selector(modalRef)
    const tl = useRef<GSAPTimeline>()
    
    function onClickCloseButton(){
        setSelectedProject(null)
        setProjectModalOpen(false)
    }

    function onClickPreviousButton(){
        if(!selectedProject) return
        let index = selectedProject.id === 0 ? projects.length - 1 : selectedProject.id - 1
        setSelectedProject(projects[index])
    }

    function onClickNextButton(){
        if(!selectedProject) return
        let index = selectedProject.id + 1 === projects.length ? 0 : selectedProject.id + 1
        setSelectedProject(projects[index])
    }

    useEffect(() => {
        tl.current = gsap.timeline()
            .fromTo(q('.text'),
                {
                    opacity: 0,
                    left: '100%'
                },
                {
                    opacity: 1,
                    left: 0,
                    duration: 0.3
                }
            )
    })

    return (
        <Wrapper className='project-modal' ref={modalRef}>
            <Container className='container'>
                <CloseContainer>
                    <CloseButton onClick={onClickCloseButton} backgroundColor='var(--black-secondary)'/>
                </CloseContainer>
                {selectedProject && (
                    <Content>
                        <Text className='text'>
                            <h3>{selectedProject.title}</h3>
                            {selectedProject?.subtitle && (<h4>{selectedProject?.subtitle}</h4>)}
                            <p>{selectedProject?.overview}</p>
                            <List>
                                <em>Stack utilisée :</em><br/>
                                {selectedProject.stack.map((tool, index) => index + 1 === selectedProject.stack.length ? (<span key={tool}>{tool}</span>) : (<span key={tool}>{tool} / </span>))}
                            </List>
                        </Text>
                        <ModalFooter>
                            <LinksContainer>
                                <a
                                    href={selectedProject.github}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <OutlineButton>Accéder au code source</OutlineButton>
                                </a>
                                <a
                                    href={selectedProject.url}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <BlueButton>Visiter le site</BlueButton>
                                </a>
                            </LinksContainer>
                            <ProjectModalPagination index={selectedProject.id} numberOfItems={projects.length} />
                            <ButtonsContainer>
                                <Button onClick={onClickPreviousButton}><img src={iconArrowDown} alt='' width='16px' height='8px' aria-hidden='true'/><span>Précédent</span></Button>
                                <Button onClick={onClickNextButton}>Suivant <img src={iconArrowDown} alt='' width='16px' height='8px' aria-hidden='true'/></Button>
                            </ButtonsContainer>
                        </ModalFooter>
                    </Content>
                )}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    padding: 1.5rem;
    background: rgba(255,255,255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;

    h3{
        font-size: 1.375rem;
        line-height: 1.5rem;
    }
`

const Container = styled.div`
    background-color: var(--white);
    width: 100%;
    max-width: 500px;
    height: 600px;
    border-radius: 1rem;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.3);
    position: relative;
    padding: 1.5rem;
`

const Content = styled.div`
    display: grid;
    row-gap: 1.5rem;
    overflow: hidden;

    @media screen and (min-width: 768px){
        height: 300px;
    }
`

const Text = styled.div`
    position: relative;
    display: grid;
    row-gap: 1.5rem;
    font-size: 0.875rem;

    @media screen and (min-width: 768px){
        font-size: 1rem;
    }
`

const List = styled.p`
    font-size: 0.75rem;
    font-weight: var(--fw-bold);
        
    em{
        font-size: 0.875rem;
        text-decoration: underline;
        font-style: normal;
    }

    @media screen and (min-width: 768px){
        font-size: 0.825rem;

        em{
            font-size: 1rem;
        }
    }
`

const ModalFooter = styled.footer`
    position: absolute;
    bottom: 1.5rem;
    left: 0;
    width: 100%;
    background-color: var(--white);
`

const CloseContainer = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 10;
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;

    button{
        transition: all .3s ease-in-out;
        display: flex;
        align-items: center;
        img{
            position: relative;
            transition: all .2s ease-in-out;
        }

        &:hover{
            color: var(--blue-primary);
        }
    }

    button:first-child{
        &:hover img{
            left: -0.25rem;
        }
        img{
            left: 0;
            margin-right: 1rem;
            transform: rotate(90deg);
        }
    }

    button:last-child{
        img{
            right: 0;
            margin-left: 1rem;
            transform: rotate(-90deg);
        }

        &:hover img{
            right: -0.25rem;
        }
    }
`

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;

    a, button{
        width: 100%;
    }

    button:first-child{
        margin-bottom: 0.5rem;
    }
`