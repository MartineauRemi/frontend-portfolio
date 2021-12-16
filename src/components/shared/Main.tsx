import styled from 'styled-components'
import Hero from '../../layout/Hero'
import About from '../../layout/About'
import Contact from '../../layout/Contact'
import Portfolio from '../../layout/Portfolio'
import { useState } from 'react'
import { IProject } from '../../interfaces'
import ProjectModal from '../projects/ProjectModal'
import LazyLoad from 'react-lazyload'
import Spinner from './loading/Spinner'

export default function Main() {
    const [selectedProject, setSelectedProject] = useState<IProject | null >(null)
    const [projectModalOpen, setProjectModalOpen] = useState(false)

    return (
        <Wrapper>
            {
                projectModalOpen
                    ? (
                        <ProjectModal
                            setProjectModalOpen={setProjectModalOpen}
                            selectedProject={selectedProject}
                            setSelectedProject={setSelectedProject}
                        />
                    ): null
            }
            <Hero />
            <LazyLoad
                placeholder={
                    <SpinnerContainer>
                        <Spinner />
                    </SpinnerContainer>
                }
            >
                <About />
            </LazyLoad>
            <LazyLoad
                placeholder={
                    <SpinnerContainer>
                        <Spinner />
                    </SpinnerContainer>
                }
            >
                <Portfolio
                    setSelectedProject={setSelectedProject}
                    setProjectModalOpen={setProjectModalOpen}
                />
            </LazyLoad>
            <Contact />
        </Wrapper>
    )
}

/*___Styling___*/

const Wrapper = styled.main`
    width: 100%;
    position :relative;
`

const SpinnerContainer = styled.div`
    margin: auto;
`