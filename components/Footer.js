import { Facebook, Instagram, Twitter } from './icons'

import Link from 'next/link'
import Separator from "../components/Separator"
import styled from 'styled-components'

const ICON = () => (
  <svg viewBox="0 0 20 20">
    <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
  </svg>
)

const Footer = styled.footer`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:${({ theme }) => theme.HOME_YELLOW};
  padding:4em 0 0 0;
  svg{
      width:24px;
  }

  p{
    font-size:14px;
    color:${({ theme }) => theme.FOOTER_TEXT};
    padding:1em 0;
  }

  margin-top:5em;

  @media only screen and (max-width: 960px) {
    padding:2em 0 0 0;
  }
`
const Links = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:1em;

  a{
    color:${({ theme }) => theme.FOOTER_TEXT};
    text-decoration:none;
    margin:1em;
    font-weight:bold;
  }

  .middle-dot{
    color:${({ theme }) => theme.FOOTER_SEPARATOR};
    margin:0 0.5em;
    font-size:24px;
  }
  @media only screen and (max-width: 960px) {
    flex-direction:column;
    a{
       margin:0.5em 0;
    }
    .middle-dot{
      display:none;
    }
  }
`

const Social = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:1em 0 5em 0;

  svg{
    cursor:pointer;
    font-size:20px;
    margin:0 0.3em;
  }

  @media only screen and (max-width: 960px) {
    margin:1em 0 2em 0;
  }
`

const CustomHeader = (props) => {
  return (
    <Footer>
      <Links>
        <Link href="#">Neden Getir?</Link>
        <span className="middle-dot">·</span>
        <Link href="#">getiryemek</Link>
        <span className="middle-dot">·</span>
        <Link href="#">Bize Ulaş</Link>
        <span className="middle-dot">·</span>
        <Link href="#">Covid-19 Uyarı</Link>
        <span className="middle-dot">·</span>
        <Link href="#">Kariyer</Link>
      </Links>
      <Social>
        <Link href="#"><Instagram /></Link>
        <Link href="#"><Facebook /></Link>
        <Link href="#"><Twitter /></Link>
      </Social>
      <Separator marginBottom="10" color={"#FFD733"} height={"1px"} />
      <p>©2020 getir</p>
    </Footer>
  )
}

export default CustomHeader