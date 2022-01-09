import styled from "styled-components";

export const StyledMenu = styled.nav `
    display:none;
    flex-direction:column;
    justify-content:center;
    transition: all 0.3s ease-in-out 0s;
    background:#4c4ca9;
    transform: ${({open})=> open ? 'translateX(0)' : 'translateX(-100%)'};
    height:100vh;
    text-align:left;
    padding:2rem;
    position:absolute;
    top:0;
    left:0;
    z-index:50;

    @media (max-width: 600px){
        display:flex;
    }

    a{
        font-size:2rem;
        text-transform:uppercase;
        padding:1rem 0;
        font-weight: bold;
        letter-spacing:0.5rem;
        color:#0D0C1D;
        text-decoration:none;
        transition:color 0.3s linear;

        // @media(max-width: 600px){
        //     font-size:1.5rem;
        //     text-align:center;
        // }

        &:hover{
            color:#343078;
        }
    }
`;