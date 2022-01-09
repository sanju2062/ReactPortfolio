import styled from 'styled-components';

const StyledLoading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position:absolute;
	background-color: rgba(100,100,100, 0.5);
  opacity:1;
  z-index:200;
  .loader {
    margin: auto;
    border: 5px dotted #dadada;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    // -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
`

const Loading = () => {
  return (
    <StyledLoading>
      <div class="loader"></div>
    </StyledLoading>
  )
}

export default Loading;