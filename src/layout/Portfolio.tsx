import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import ProjectsList from '../components/projects/ProjectsList'
import Section from '../components/shared/Section'
import { SectionTitle } from '../components/shared/SectionTitle'
import { IProject } from '../interfaces'

interface Props{
    setSelectedProject: Dispatch<SetStateAction<IProject | null>>;
    setProjectModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Portfolio({setSelectedProject, setProjectModalOpen}: Props): ReactElement {

    return (
        <Section id='portfolio' background='var(--white-secondary)'>
            <SectionTitle
                outline='PORTFOLIO'
                title='MES PROJETS'
            />
            <ProjectsList
                setSelectedProject={setSelectedProject}
                setProjectModalOpen={setProjectModalOpen}
            />
        </Section>
    )
}