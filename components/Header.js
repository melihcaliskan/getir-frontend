import Link from 'next/link'
import { Search as SearchIcon } from './icons'
import styled from 'styled-components'

const Header = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:2rem 0;
`

const Left = styled.div`
  display:flex;
  align-items:center;
`

const Logo = styled.img`
  cursor:pointer;
  margin-right:2em;
  object-fit:contain;
`

const Search = styled.div`
  width:410px;
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

const ProfilePicture = styled.img`
  padding:1em;
  width:48px;
  height:48px;
  border-radius:50%;
  background-image: url("https://pbs.twimg.com/profile_images/977536334377168896/FSIxjgf7_400x400.jpg");
  background-repeat: none;
  background-size:cover;
`
const CustomHeader = ({ toggleTheme }) => {
  return (
    <Header>
      <Left>
        <span onClick={() => toggleTheme()}><Logo src="/logo.png" width="80x" alt="getir" /></span>
        <Search>
          <input type="text" placeholder="getir'de ara" />
          <SearchIcon />
        </Search>
      </Left>
      <div>
        Kategoriler
      <img src="/logo.png" width="36px" alt="getir yemek" />yemek

      Selam, <strong>Melih</strong>
        <ProfilePicture />
      </div>
    </Header>
  )
}

export default CustomHeader