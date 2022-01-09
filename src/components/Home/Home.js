import image from '../../assests/sample.jpg'
import styled from 'styled-components';
import SocialMediaIcons from "../SocialMediaIcons";

const StyledHome = styled.div`
    display:flex;
    height:80vh;
    flex-wrap:nowrap;
    justify-content:space-around;
    flex-direction:column;
    align-items:center;
    .HomeLeft{
        overflow-X:hidden;
        display:flex;
        width:83%;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        overflow:visible;
        p{
            // font-size:36px;
        }
        
        p{
            padding: 100px 0;
            animation-name: move;
            animation-duration:2s;
            @keyframes move{
                0%{
                    transform:translateX(-300px);
                }
                100%{
                    transform:translateX(0px);
                }
            }
        }
        .home-para{
            font-size:27px;
            padding:100px 10px;
        }
        .image{
            // width:30%;
            display:flex;
            justify-content:center;
            align-items:center;
            animation-name: move-img;
            animation-duration:2s;
            @keyframes move-img{
                0%{
                    transform:translateX(300px);
                }
                100%{
                    transform:translateX(0px);
                }
            }
        }
        img{
            height:185px;
            width:185px;
            border-radius:50%;
            border: 4px solid #4c4ca9;
        }
        
    }
    .iconContainer{
        display:flex;
        justify-content:center;
        align-items:center;
        overflow:visible;
    }
    
    @media(max-width:700px){
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
        height:unset;
        p{
            text-align:center;
            animation-name: move;
            animation-duration:2s;
            @keyframes move{
                0%{
                    transform:translateX(-300px);
                    }
                100%{
                    transform:translateX(0px);
                }
            }
        }
        .HomeLeft{
            overflow-X:hidden;
            width:unset;
            flex-direction:column-reverse;
            .home-para{
                padding:20px;
                overflow:hidden;
                p{
                    animation-name: move;
                    animation-duration:2s;
                    @keyframes move{
                        0%{
                            transform:translateX(-300px);
                        }
                        100%{
                            transform:translateX(0px);
                        }
                    }
                }
            }
        }
        .iconContainer{
            .icon{
                margin:50px 10px 0 10px;
            }
        }
      }
`;

const Home = () => {
    return (
        <StyledHome>
            <title>Sanju | Home</title>
            <div className="HomeLeft">
                <p className="home-para">
                    <p style={{ display: 'inline', fontSize: '36px' }}>Hello, I am <p style={{ color: '#4c4ca9', display: 'inline', fontSize: '34px' }}>Sanju</p>.</p><br />
                    I am a <p style={{ color: '#4c4ca9', display: 'inline' }}>Web developer </p>|<p style={{ color: '#4c4ca9', display: 'inline' }}> Android App developer</p>.<br />
                    Currently I am studing Btech in Punjabi University, Patiala.<br />
                </p>
                <div className='image'>
                    <img src={image} alt="image" />
                </div>
            </div>
            <div className="iconContainer">
                <SocialMediaIcons />
            </div>
        </StyledHome>
    )
}

export default Home;