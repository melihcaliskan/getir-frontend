import Fade from 'react-reveal/Fade';
import styled from 'styled-components'

const Loader = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  height:100vh;
  img{
      animation: breathing 2s ease-out infinite normal;
      width:15%;
      @media only screen and (max-width: 960px) {
        width:30%;
      }
  }
`

const CustomLoader = (props) => {
  return (
    <Fade>
      <Loader>
        <img width="320" src="/logo-mobile.png" alt="getir" />
      </Loader>
    </Fade>
  )
}

export default CustomLoader