import styled from 'styled-components';

const StyledIconContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
.icon{
    margin: 30px 10px 0 10px;
    background-color: #000000;
    border: 0.5px solid white;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      text-decoration:none;
      overflow:visible;
    }
    .fa_custom{
        font-size:30px;
        color:white;
    }
    .fa-facebook{
      font-size:25px;
    }
    &:hover{
        background-color: white;
        .fa_custom{
            color:black;
        }
    }
}
`;

const SocialMediaIcons = () => {
  return (
    <StyledIconContainer>
      <div className="icon"><a href="https://www.instagram.com/sa.njukumar" target="_blank"><i class="fa fa-instagram fa_custom"></i></a></div>
      <div className="icon"><a href="https://www.facebook.com/profile.php?id=100067543698609" target="_blank"><i class="fa fa-facebook fa_custom"></i></a></div>
      <div className="icon"><a href="https://api.whatsapp.com/send?phone=918753000021?Hi,Sanju" target="_blank"><i class="fa fa-whatsapp fa_custom"></i></a></div>
    </StyledIconContainer>
  )
}

export default SocialMediaIcons;