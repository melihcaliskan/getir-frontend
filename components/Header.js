import { Bag, Dropdown, Heart, Search as SearchIcon } from './icons'

import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import VerticalSeparator from "./VerticalSeparator"
import styled from 'styled-components'

const Header = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:2rem 0;

  .no-mobile{
    display:inline-flex;
    align-items:center;
  }
  @media only screen and (max-width: 1440px) {
  }

  @media only screen and (max-width: 1280px) {
  }

  @media only screen and (max-width: 960px) {
    .no-mobile{
      display:none;
    }
  }
`

const Left = styled.div`
  display:flex;
  align-items:center;
  width:100%;
`

const Logo = styled.img`
  cursor:pointer;
  margin-right:2em;
  object-fit:contain;
`

const Search = styled.div`
  width:50%;
  min-width:240px;
  height:48px;
  border-radius:14px;
  padding:0.8em 1em;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:${({ theme }) => theme.body_100};
  
  input{
    &:focus{
      outline:0;
    }
    ::placeholder{
      color:${({ theme }) => theme.SEARCH_TEXT};
    }
    width:100%;
    height:100%;
    border:0;
    background:transparent;
  }
`

const Right = styled.div`
  display:flex;
  align-items:center;
`

const ProfilePicture = styled.img`
  padding:1em;
  width:48px;
  height:48px;
  border-radius:50%;
  background-image: url("https://pbs.twimg.com/profile_images/977536334377168896/FSIxjgf7_400x400.jpg");
  background-repeat: none;
  background-size:cover;


  @media only screen and (max-width: 960px) {
    width:42px;
    height:42px;
    margin-left:1em;
  }
`

const Item = styled.div`
  display:inline-flex;
  align-items:center;
  margin-right:1em;

  cursor:pointer;
  
  .categories{
    margin-right:0.3em;
  }

  .yemek{
    margin-left:0.2em;
    margin-bottom:25%;
    font-weight:bold;
  }

  .hi{
    margin-left:2em;
    margin-right:0.2em;
    color:#ABABBA;
  }
  
  strong{
    margin-right:1em;
  }
`

const HeartContainer = styled.div`
  display:inline-flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;

  width:42px;
  height:42px;
  border-radius:50%;
  background:${({ theme }) => theme.HOME_YELLOW};
`

const MobileSearchContainer = styled.div`
  display:inline-flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;

  width:42px;
  height:42px;
  border-radius:50%;
  background:${({ theme }) => "#EDE9FF"};

  &:hover,&:focus{
    background:${({ theme }) => "#5D3EBC"};
    svg path{
      background:${({ theme }) => "white"};
    }
  }
`

const CartContainer = styled.div`
  position:relative;
  display:inline-flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;

  width:42px;
  height:42px;
  border-radius:10px;
  background:${({ theme }) => theme.HOME_APPS_BG};
  margin-left:1.5em;
`

const Badge = styled.div`
  display:inline-flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  top:-10px;
  right:-10px;
  
  width:24px;
  height:24px;
  border-radius:50%;

  font-size:12px;
  color:${({ theme }) => theme.body};
  background:${({ theme }) => theme.BRAND_PURPLE};
  box-shadow: 0px 2px 8px -2px #C1BADE;
`

const CustomHeader = ({ toggleTheme, isMobile }) => {
  return (
    <Fade duration={700}>
      <Header>
        {isMobile &&
          <span onClick={() => null}><Logo src="/logo-mobile.png" width="40px" alt="getir" /></span>
        }
        <Left className="no-mobile">
          <span onClick={() => null}><Logo src="/logo.png" width="80px" alt="getir" /></span>
          <Search>
            <input type="text" placeholder="getir'de ara" />
            <SearchIcon />
          </Search>
        </Left>

        <Right>
          <div className="no-mobile">
            <Item>
              <p className="categories">Kategoriler</p>
              <Dropdown fontSize="14" />
            </Item>

            <Item>
              <img src="/logo.png" width="32px" alt="getir yemek" />
              <p className="yemek">yemek</p>
            </Item>

            <VerticalSeparator />
          </div>

          {isMobile &&
            <MobileSearchContainer>
              <SearchIcon />
            </MobileSearchContainer>
          }

          {!isMobile &&
            <HeartContainer>
              <Heart />
            </HeartContainer>
          }
          <Item>
            <CartContainer>
              <Badge>
                2
            </Badge>
              <Bag />
            </CartContainer>
          </Item>

          <Item>
            <p className="hi no-mobile">Selam,</p><strong className="no-mobile">Melih</strong>
            <ProfilePicture />
          </Item>
        </Right>
      </Header>
    </Fade>
  )
}

export default CustomHeader