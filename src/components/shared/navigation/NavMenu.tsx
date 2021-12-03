import styled from "styled-components";
import MainNav from "./MainNav";

export default function NavMenu() {
    return (
        <Wrapper>
           <MainNav /> 
        </Wrapper>
    )
}

const Wrapper = styled.div`
    @media screen and (max-width: 767px){
        display: none;
    }
`