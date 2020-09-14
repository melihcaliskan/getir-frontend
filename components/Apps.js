import { AppStore, GooglePlay } from './icons'

import Fade from 'react-reveal/Fade';
import styled from 'styled-components'

const Container = styled.section`
  display:inline-flex;
  align-items:center;
  justify-content:flex-end;
  position:relative;

  margin:15em 0 15em 5em;
  padding:3em 0 5em 0;
  border-radius: 40px;
  background:${({ theme }) => theme.HOME_APPS_BG};

  @media only screen and (max-width: 960px) {
    margin:8em 0 0 0; 
    padding:5em 1em 2em 1em;
    text-align:center;
  }
`

const HeroImage = styled.div`
  width:640px;
  height:640px;
  position:absolute;
  top:0;
  left:0;
  background-image: url("/phones.png");
  background-size:contain;
  background-repeat:no-repeat;

  @media only screen and (max-width: 960px) {
    left:25%;
    top:-5.5em;
    width:160px;
    height:160px;
  }
`

const HeroText = styled.h2`
	color:"#23222A";
	line-height:1.4em;
`

const DetailText = styled.p`
	color:"#3B3946";
`

const Links = styled.div`
  margin-top:2.5em;
  @media only screen and (max-width: 960px) {
    display:flex;
  }
`

const Button = styled.a`
	display:inline-flex;
	align-items:center;
	color:#23222A;
	font-size:16px;
	font-weight:bold;
	text-decoration:none;

	padding:1.2em;
	border-radius: 6px;

	background: #FFFFFF;
	box-shadow: 0px 2px 8px -2px #C1BADE;
	margin-right:1.5em;

	transition: all .4s;

	svg{
		margin:0 1em 0 0.3em;
	}

	&:hover{
    background:${({ theme }) => "#FFFBEB"};
  }
  
  @media only screen and (max-width: 960px) {
    font-size:14px;
  }
`

const Apps = ({ isMobile }) => {
  return (
    <Container>
      <HeroImage />
      <div style={{ width: !isMobile && "50%" }}>
        <HeroText>
          Getir uygulamasını <br /> simdi indirin.
					</HeroText>
        <DetailText>
          Uygulamayı indirebilmeniz için telefonunuza <br /> bir bağlantı göndereceğiz.
					</DetailText>

        <Links>
          <Button href="#">
            <AppStore /> App Store
						</Button>

          <Button href="#">
            <GooglePlay /> Google Play
						</Button>
        </Links>
      </div>
    </Container>
  )
}

export default Apps