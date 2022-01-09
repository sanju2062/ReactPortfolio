import styled from 'styled-components';
import logo from '../assests/3.png';

const StyledLogo = styled.div`
    display:flex;
    flex-direction:row;
    img{
        width:50px;
    }
    h1{
        color:white;
        &:hover{
            color:blanchedalmond;
        }
    }
    @media(max-width:600px){
        img{
            // z-index:100;
        }
        h1{
            // z-index:100;
            color:${({open})=>open?'rgb(37, 34, 34)':'white'}}
            &:hover{
                color:red;
            }
        }
    }
`;

function Logo ({open}){
    return(
        <StyledLogo open={open}>
            <img src={logo} alt="img" />
            <h1>Sanju</h1>
        </StyledLogo>
    )
}

export default Logo;