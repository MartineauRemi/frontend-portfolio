import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BsClipboard } from 'react-icons/bs'
import { MdDone } from 'react-icons/md'
import { email } from '../../data/my-infos'
import { gsap } from 'gsap'

export default function EmailAddress() {
    const [popupVisible, setPopupVisible] = useState(false)
    const popupRef = React.useRef<HTMLDivElement>(null);
    
    const onClickEmail = () => {
        if(popupVisible) return

        navigator.clipboard.writeText(email)
        setPopupVisible(true)
        setTimeout(() => setPopupVisible(false), 3000)
    }


    useEffect(() => {
        if(!popupVisible) return

        gsap.from(popupRef.current,
            {
                top: '3rem',
                opacity: 0,
                duration: .3
            }    
        )

        gsap.to(popupRef.current,
            {
                opacity: 0,
                duration: .3,
                right: '100%',
                delay: 2.7
            })
    })

    return (
        <Wrapper
            onClick={onClickEmail}
        >
            <Content>
                <Text>{email}</Text>
                <ClipboardIcon>
                    <BsClipboard />
                </ClipboardIcon>
            </Content>

            {
                popupVisible ?
                    (
                        <Popup ref={popupRef}>
                            <PopupContainer>
                                <p>
                                    L'adresse e-mail a été copiée
                                </p>
                                <Circle>
                                    <MdDone />
                                </Circle>
                            </PopupContainer>
                        </Popup>
                    ) : null
            }
        </Wrapper>
    )
}

/*___Styling___*/

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`

const Content = styled.div`
    border: 1px solid var(--gray);
    border-color: var(--gray);
    border-radius: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    position: relative;

    &:hover{
        &::after{
            content: 'Cliquez pour copier';
            position: absolute;
            bottom: -50%;
            right: -10%;
            background-color: var(--black-secondary);
            color: var(--white-secondary);
            padding: 0.5rem;
            font-size: .625rem;
        }
    }
`
const Text = styled.p`
    color: var(--black-secondary);
    font-size: 1rem;
    font-weight: var(--fw-bold);
    margin-right: 1rem;
    padding-left: 1rem;
    font-size: 0.825rem;

    @media screen and (min-width: 768px){
        font-size: 1.125rem;
    }
`

const ClipboardIcon = styled.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black-secondary);
    width: 2rem;
    height: 2rem;
    border-left: 1px solid var(--gray);
    padding: 0.5rem;
`

const Popup = styled.div`
    position: absolute;
    bottom: -0.5rem;
    left: 2.5rem;
    z-index: 2;
    background-color: var(--white);
    box-shadow: 2px 2px 10px rgba(0,0,0,0.1), 2px -2px 10px rgba(0,0,0,0.1);
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
`

const PopupContainer = styled.div`
    width: 18rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
`

const Circle = styled.div`
    border-radius: 50%;
    background-color: #98FB98;
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
`