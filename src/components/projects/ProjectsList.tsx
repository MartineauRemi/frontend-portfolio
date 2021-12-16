import { Dispatch, ReactElement, SetStateAction } from 'react'
import styled from 'styled-components'
import { projects } from '../../data/projects'
import Project from './Project'
import LazyLoad from 'react-lazyload'
import Spinner from '../shared/loading/Spinner'
import { IProject } from '../../interfaces'

interface Props{
    setSelectedProject: Dispatch<SetStateAction<IProject | null>>;
    setProjectModalOpen: Dispatch<SetStateAction<boolean>>;
}
export default function ProjectsList({setSelectedProject, setProjectModalOpen}: Props): ReactElement {
    return (
        <List>
            {projects.map((project, index) => {
                return (
                    <li key={index}>
                        <LazyLoad placeholder={<Spinner />}>
                            <Project
                                project={project}
                                setSelectedProject={setSelectedProject}
                                setProjectModalOpen={setProjectModalOpen}
                            />
                        </LazyLoad>
                    </li>
                )
            })}
        </List>
    )
}

const List = styled.ul`
    width: 100%;
    display: grid;
    row-gap: 2rem;
    position: relative;
    margin-bottom: 2rem;

    @media screen and (min-width: 768px){
        grid-template-columns: repeat(2, auto);
        column-gap: 2rem;
        row-gap: 4.5rem;
        margin-bottom: 3rem;
    }
`
