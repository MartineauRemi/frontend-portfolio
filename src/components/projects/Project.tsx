import { Dispatch, ReactElement, SetStateAction } from 'react'
import styled from 'styled-components'
import { IProject } from '../../interfaces'

interface Props{
    project: IProject;
    setProjectModalOpen: Dispatch<SetStateAction<boolean>>;
    setSelectedProject: Dispatch<SetStateAction<IProject | null>>;
}

export default function Project({project, setProjectModalOpen, setSelectedProject}: Props): ReactElement {
    const onClickThumbnail = () => {
        setSelectedProject(project)
        setProjectModalOpen(true)
    }

    return (
        <Wrapper className='project' onClick={onClickThumbnail} thumbnail={project.thumbnail} />
    )
}


/*___Styling___*/

const Wrapper = styled.div<{className: string; onClick: () => void; thumbnail: string;}>`
    width: 100%;
    max-height: 21.25rem;
    height: 48.85vw;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    border-radius: 1rem;
    cursor: pointer;
    position: relative;
    background-image: ${props => `url(${props.thumbnail})`};
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top center;
    transition: all .3s ease-in-out;

    &:hover{
        background-size: 105%;
    }

    @media screen and (min-width: 768px){
        height: 30.5vw;
    }
`