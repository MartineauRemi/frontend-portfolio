import styled from "styled-components"

export interface IButtonProps{
    label?: string;
    onClick: (props: any) => any;
}

export const Button = styled.button`
    cursor: pointer;
    border: none;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: var(--fw-medium);
    padding: 1rem;
    background-color: var(--transparent);
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
        <NavButton className='nav-menu-button mobile-only' onClick={onClick}>
            <Tick />
            <Tick />
            <Tick />
        </NavButton>
    )
}


/*___CloseButton___*/

const CloseButtonTick = styled.span`
    width: 100%;
    height: 2px;
    background-color: var(--white-secondary);
    transform-origin: center;
    position: absolute;
    top: 50%;
    left: 0;

    &:hover{
        background-color: var(--white);
    }

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

export const CloseButton = ({onClick}: IButtonProps) => {
    return (
        <StyledCloseButton onClick={onClick}>
            <CloseButtonTick />
            <CloseButtonTick />
        </StyledCloseButton>
    )
}