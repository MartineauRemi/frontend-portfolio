import React, { ReactElement } from 'react'
import styled from 'styled-components'
import iconArrowDown from '../../../assets/hero/icon-arrow-down.svg'

export default function ScrollCTA(): ReactElement {
    return (
        <Wrapper href='#about'>
            <CircleMsg>
                <Letter>S</Letter>
                <Letter>C</Letter>
                <Letter>R</Letter>
                <Letter>O</Letter>
                <Letter>L</Letter>
                <Letter>L</Letter>

                <Letter>S</Letter>
                <Letter>C</Letter>
                <Letter>R</Letter>
                <Letter>O</Letter>
                <Letter>L</Letter>
                <Letter>L</Letter>
            </CircleMsg>
            <img src={iconArrowDown} alt='' aria-hidden='true' width='16px' height='10px'/>
        </Wrapper>
    )
}

/*___styling___*/

const Wrapper = styled.a`
    display: inline-block;
    position: relative;
    transition: all .3s ease-in-out;
    img{
        transform-origin: center;
        position: absolute;
        top: 46px;
        left: 42px;
    }

    color: var(--black-secondary);
    &:hover{
        color: var(--blue-primary);
    }
`

const CircleMsg = styled.div`
    @keyframes rotation{
        from{
            transform: rotate(0deg)
        }to{
            transform: rotate(360deg)
        }
    }

    font-size: 0.625rem;
    line-height: 1.5rem;
    font-weight: var(--fw-medium);
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    animation: rotation 25s linear infinite;
    width: 100px;
    height: 100px;
`

const Letter = styled.span`
    transform-origin: bottom center;
    height: 50px;
    position: absolute;
    left: calc(50% - 0.375rem);
    top: calc(50% - 50px);
    /* -webkit-text-stroke: 1px var(--black-secondary);
    color: transparent; */

    &:first-child{
        transform: rotate(25deg);
    }

    &:nth-child(2){
        transform: rotate(50deg);
    }
    
    &:nth-child(3){
        transform: rotate(75deg);
    }

    &:nth-child(4){
        transform: rotate(100deg);
    }

    &:nth-child(5){
        transform: rotate(125deg);
    }

    &:nth-child(6){
        transform: rotate(150deg);
    }



    &:nth-child(7){
        transform: rotate(205deg);
    }

    &:nth-child(8){
        transform: rotate(230deg);
    }

    &:nth-child(9){
        transform: rotate(255deg);
    }

    &:nth-child(10){
        transform: rotate(280deg);
    }

    &:nth-child(11){
        transform: rotate(305deg);
    }

    &:nth-child(12){
        transform: rotate(330deg);
    }
`