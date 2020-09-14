import ETA from "./ETA"
import Fade from 'react-reveal/Fade';
import Separator from "../components/Separator"
import styled from 'styled-components'

const Container = styled.div`
  position:relative;
  margin-top:3em;
`

const Left = styled.div`
  background:${({ theme }) => theme.HOME_YELLOW};
  border-radius:20px;
  padding:2.5rem 5rem;
  clip-path: polygon(0 0, 100% 0, 100% 10%, 70% 100%, 0 100%, 0 100%);

  @media only screen and (max-width: 1280px) {
    padding:1rem 3rem;
  }
`

const HeroText = styled.h2`
  color:#24222A;
  line-height:1.5em;
  @media only screen and (max-width: 1280px) {
    font-size:32px;
  }
`
const DetailText = styled.p`
  font-size:18px;
  line-height:1.7em;
  color:${({ theme }) => theme.DETAIL_TEXT};
  @media only screen and (max-width: 1280px) {
    font-size:17px;
  }
`

const HeroImg = styled.div`
  width:480px;
  height:480px;
  position:absolute;
  top:40px;
  right:0;
  background-image: url("/hero-img.png");
  background-size:contain;
  background-repeat:no-repeat;

  @media only screen and (max-width: 1560px) {
    top:80px;
    width:400px;
  }

  @media only screen and (max-width: 1280px) {
    top:40px;
    width:360px;
  }
`

const CTA = ({ theme }) => {
  return (
    <Fade bottom duration={700} distance="50px">
      <Container>
        <Left>
          <HeroText>
            Her zaman & her yere <br />
          binlerce ürün siparisi ver.
        </HeroText>
          <Separator width={72} marginBottom={30} color={theme.SEPARATOR_YELLOW} />
          <DetailText>
            1500'den fazla ürünle, dakikalar içinde, İstanbul, İzmir, <br />
            Ankara, Bursa,
            Kocaeli ve Bodrum'da dilediğiniz yere <br />
            mutluluk getiriyoruz.
        </DetailText>
          <ETA />
        </Left>

        <HeroImg />
      </Container>
    </Fade>
  )
}

export default CTA