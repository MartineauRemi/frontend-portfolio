import styled from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { mySocialMedias } from '../../../data/my-infos'
import { ReactNode } from 'react'

interface ISocialMediaProps{
    href: string;
    ariaLabel: string;
    children?: ReactNode;
}

const Link = styled.a`
    color: var(--white-secondary);
    transition: all .3s ease-in-out;
    font-size: 1.5rem;
`

const SocialMedia = ({href, ariaLabel, children}: ISocialMediaProps) => {
    return (
        <Link
            href={href}
            aria-label={ariaLabel}
            target='_blank'
            rel='noreferrer'
        >
            {children}
        </Link>
    )
}

export const Linkedin = () => {
    return (
        <SocialMedia
            href={mySocialMedias.linkedin}
            ariaLabel='linkedin'
        >
            <FaLinkedinIn />
        </SocialMedia>
    )
}

export const Github = () => {
    return (
        <SocialMedia
            href={mySocialMedias.github}
            ariaLabel='github'
        >
            <FaGithub />
        </SocialMedia>
    )
}

export const Twitter = () => {
    return (
        <SocialMedia
            href={mySocialMedias.twitter}
            ariaLabel='twitter'
        >
            <FaTwitter />
        </SocialMedia>
    )
}

