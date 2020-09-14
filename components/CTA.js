import ETA from "./ETA"
import Fade from 'react-reveal/Fade';
import Separator from "../components/Separator"
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  margin-top:3em;
  @media only screen and (max-width: 960px) {
    margin-top:1em;
  }
`

const Left = styled.div`
  background:${({ theme }) => theme.HOME_YELLOW};
  border-radius:20px;
  padding:2.5rem 5rem;
  clip-path: polygon(0 0, 100% 0, 100% 10%, 70% 100%, 0 100%, 0 100%);

  @media only screen and (max-width: 1280px) {
    padding:1rem 3rem;
  }
  @media only screen and (max-width: 960px) {
    padding:1rem 2rem;
  }
`
const HeroText = styled.h2`
  color:#24222A;
  line-height:1.5em;
`

const DetailText = styled.p`
  font-size:18px;
  line-height:1.7em;
  color:${({ theme }) => theme.DETAIL_TEXT};

  width:40%;
  @media only screen and (max-width: 960px) {
    width:60%;
    font-size:14px;
  }
`

const HeroImg = styled.div`
  width:480px;
  height:480px;
  position:absolute;
  top:40px;
  right:10%;
  background-image: url("/hero-img.png");
  background-size:contain;
  background-repeat:no-repeat;

  transition: width .4s;
  
  @media only screen and (max-width: 1560px) {
    right:4%;
    top:80px;
    width:400px;
  }

  @media only screen and (max-width: 1280px) {
    right:0;
    top:40px;
    width:360px;
  }

  @media only screen and (max-width: 960px) {
    right:5%;
    top:0px;
    width:220px;
  }
  @media only screen and (max-width: 640px) {
    right:0;
    top:80px;
    width:140px;
  }
`

const CTA = ({ isMobile, theme }) => {
  const DETAIL_TEXT = isMobile ?
    `1500'den fazla ürünle, dakikalar içinde, dilediğiniz yere mutluluk getiriyoruz.`
    :
    `1500'den fazla ürünle, dakikalar içinde, İstanbul, İzmir,
                        Ankara, Bursa,
                        Kocaeli ve Bodrum'da dilediğiniz yere
                        mutluluk getiriyoruz.`
  return (
    <Fade bottom duration={400} distance="30px">
      <div>
        <Container>
          <Left>
            <HeroText>
              Her zaman & her yere <br /> binlerce ürün siparisi ver.
          </HeroText>
            <Separator width={72} marginBottom={30} marginTop={isMobile && 10} color={theme.SEPARATOR_YELLOW} />
            <DetailText>
              {DETAIL_TEXT}
            </DetailText>
            {!isMobile &&
              <ETA />
            }
          </Left>
          <HeroImg />
        </Container>
        {isMobile &&
          <div style={{ textAlign: 'center' }}>
            <ETA isMobile={isMobile} />
          </div>
        }
      </div>
    </Fade>
  )
}

export default CTA