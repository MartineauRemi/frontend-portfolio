import styled from "styled-components"

export interface IButtonProps{
    label?: string;
    onClick: (props: any) => any;
    backgroundColor?: string;
}

export const Button = styled.button`
    cursor: pointer;
    border: none;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: var(--fw-medium);
    padding: 1rem;
    background-color: var(--transparent);
    transition: all .3s ease-in-out;
`

export const OutlineButton = styled(Button)`
    background-color: transparent;
    border: 1px solid var(--black-secondary);
    color: var(--black-secondary);
    border-radius: 0.5rem;

    &:hover{
        color: var(--blue-primary);
        border: 1px solid var(--blue-primary);
    }
`

export const BlueButton = styled(Button)`
    color: var(--white);
    background-color: var(--blue-primary);
    border: 1px solid var(--blue-primary);
    border-radius: 0.5rem;

    &:hover{
        background-color: var(--blue-secondary);
        border-color: var(--blue-secondary);
    }
`


/*___NavMenuButton___*/

const Tick = styled.span`
    width: 100%;
    height: 1px;
    background-color: var(--black-secondary);
    position: absolute;
    right: 0;

    &:first-child{
        width: 90%;
        top: 20%;
    }

    &:nth-child(2){
        width: 70%;
    }
    
    &:last-child{
        top: 80%;
    }
`

const NavButton = styled(Button)`
    position: relative;
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;

`

export const NavMenuButton = ({onClick}: {onClick: () => void}) => {
    return (
        <NavButton className='nav-menu-button mobile-only' onClick={onClick} aria-label='nav-button'>
            <Tick />
            <Tick />
            <Tick />
        </NavButton>
    )
}


/*___CloseButton___*/

const CloseButtonTick = styled.span<{backgroundColor?: string}>`
    width: 100%;
    height: 2px;
    background-color: ${props => props.backgroundColor ? `${props.backgroundColor}` : 'var(--white-secondary)'};
    transform-origin: center;
    position: absolute;
    top: 50%;
    left: 0;

    &:first-child{
        transform: rotate(45deg);
    }

    &:last-child{
        transform: rotate(-45deg);
    }
`

const StyledCloseButton = styled(Button)`
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    padding: 0;
`

export const CloseButton = ({onClick, backgroundColor}: IButtonProps) => {
    return (
        <StyledCloseButton onClick={onClick} aria-label='close-button'>
            <CloseButtonTick backgroundColor={backgroundColor}/>
            <CloseButtonTick backgroundColor={backgroundColor}/>
        </StyledCloseButton>
    )
}