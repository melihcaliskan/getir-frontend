import { AppStore, GooglePlay } from './icons'

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
`

const HeroImage = styled.div`
  width:640px;
  height:640px;
  position:absolute;
  top:-8em;
  left:-8em;
  background-image: url("/phones.png");
  background-size:contain;
  background-repeat:no-repeat;
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
`

const Apps = (props) => {
	return (
		<Container>
			<HeroImage />
			<div style={{ width: "50%" }}>
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