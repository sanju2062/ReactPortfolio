import styled from 'styled-components';
import "./About.css";
import SocialMediaIcons from "../SocialMediaIcons";
// import PercentageCircle from 'reactjs-percentage-circle';

const StyledAbout = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    h1{
        color:#4c4ca9;
    }
    .about-para{
      padding:2rem 5rem;
      text-align:center;
      transition:all 0.3s;
      @media(max-width:600px){
        padding:1.5rem;
      }
    }
    .skills-outer-div{
      overflow-X:hidden;
      .skills-div{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        .skill-heading{
          color:#4c4ca9;
          text-align:center;
        }
        .loading-circles{
          display:flex;
          justify-content:center;
          align-items:center;
          flex-wrap:wrap;
          .skill{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            padding:1rem;
          }
        }
      }
      .web{
        animation-name: move-web;
        animation-duration:2s;
        @keyframes move-web{
            0%{
                transform:translateX(-500px);
            }
            100%{
                transform:translateX(0px);
            }
        }
      }
      .android{
        animation-name: move-android;
        animation-duration:2s;
        @keyframes move-android{
            0%{
                transform:translateX(500px);
            }
            100%{
                transform:translateX(0px);
            }
        }
      }
      .programming{
        animation-name: move-programming;
        animation-duration:2s;
        @keyframes move-programming{
            0%{
                transform:translateX(-500px);
            }
            100%{
                transform:translateX(0px);
            }
        }
      }
    }
`;

const About = () => {
  return (
    <StyledAbout>
      <title>Sanju | About</title>
      <h1> About </h1>
      <p className="about-para">
        I am Sanju Kumar. I am studying in Punjabi University, Patiala and working in web
        development and android app development as freelancer.I have 2 years experience in these fields. I love to do
        programming. I have knowledge of many programming languages, you can check my skills below.
      </p>
      <div className="skills-outer-div">
        <div className="skills-div web">
          <h2 className="skill-heading">Skills in web development</h2>
          <div className="loading-circles">
            <div className="skill">
              <h3 className="skill-label">HTML</h3>
              <div className="box1">95%</div>
            </div>
            <div className="skill">
              <h3 className="skill-label">CSS</h3>
              <div className="box2">80%</div>
            </div>
            <div className="skill">
              <h3 className="skill-label">JAVASCRIPT</h3>
              <div className="box3">78%</div>
            </div>
            <div className="skill">
              <h3 className="skill-label">JQUERY</h3>
              <div className="box4">75%</div>
            </div>
            <div className="skill">
              <h3 className="skill-label">REACTJS</h3>
              <div className="box5">88%</div>
            </div>
            <div className="skill">
              <h3 className="skill-label">NODEJS</h3>
              <div className="box6">72%</div>
            </div>
          </div>
        </div>
        <div className="skills-div android">
          <h2 className="skill-heading">Skills in Android App Development</h2>
          <div className="loading-circles">
            <div className="skill">
              <h3 className="skill-label">JAVA</h3>
              <div className="box4">95%</div>
            </div>
            <div className="skill">
              <h3 className="skill-label">FLUTTER</h3>
              <div className="box7">80%</div>
            </div>
            <div className="skill">
              <h3 className="skill-label">REACT NATIVE</h3>
              <div className="box6">78%</div>
            </div>
            <div className="skill">
              <h3 className="skill-label">EXPO</h3>
              <div className="box5">75%</div>
            </div>
            <div className="skill">
              <h3 className="skill-label">KOTLIN</h3>
              <div className="box7">88%</div>
            </div>
          </div>
        </div>
        <div className="skills-div programming">
          <h2 className="skill-heading">Programming Languages</h2>
          <div className="loading-circles">
            <div className="skill">
              <h3 className="skill-label">PYTHON</h3>
              <div className="box5">95%</div>
            </div>
            <div className="skill">
              <h3 className="skill-label">C</h3>
              <div className="box2">80%</div>
            </div>
            <div className="skill">
              <h3 className="skill-label">C++</h3>
              <div className="box6">78%</div>
            </div>
            <div className="skill">
              <h3 className="skill-label">JAVA</h3>
              <div className="box4">75%</div>
            </div>
            <div className="skill">
              <h3 className="skill-label">JAVASCRIPT</h3>
              <div className="box5">88%</div>
            </div>
          </div>
        </div>
      </div>
      <SocialMediaIcons />
    </StyledAbout>
  )
}

export default About;