import ETA from "./ETA"
import Fade from 'react-reveal/Fade';
import Separator from "../components/Separator"
import fetcher from "../helpers/fetcher"
import styled from 'styled-components'
import useSWR from 'swr'

const Container = styled.section`
  margin-top:5em;
`
const Title = styled.p`
  text-align:center;
  font-size:24px;
`
const Grid = styled.div`
  background:${({ theme }) => theme.HOME_CATEGORY_BG};
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.isMobile ? 3 : 5}, 1fr)`}; 
  grid-gap: 40px;
  justify-items: center;
  align-items: center;

  border-radius:30px;

  margin-top:8em;
  padding:3em;
`

const Item = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between ;
  align-items:center;
  text-align:center;
  cursor:pointer;
  
  padding:1.5em 1.5em;
  width:160px;
  height:160px;
  background:${({ theme }) => theme.body};
  border-radius:30px;
  box-shadow: 0px 2px 8px -2px #C1BADE;
    
  transition: all 0.5s ease;

  &:nth-child(-n+5){
    margin-top: ${(props) => !props.isMobile && "-7em"}
  }

  &:nth-child(-n+3){
    margin-top: ${(props) => props.isMobile && "-7em"}
  }


  img{
    object-fit:contain;
  }

  &:hover{
    transform: translateY(-8px);
    background:${({ theme }) => "#FFFBEB"};
  }

  @media only screen and (max-width: 1280px) {
    width:140px;
    height:140px;
  }
`

const Categories = ({ isMobile }) => {
  const { data, error } = useSWR('/api/categories', fetcher)
  const dataLength = isMobile ? 6 : data && data.length
  return (
    <Fade>
      <Container>
        <Title>Kategoriler</Title>
        <Separator
          center
          borderRadius={10}
          width={"24px"}
          height={"2px"}
          marginTop={-10}
          marginBottom={-10}
          color="#5D3EBC"
        />

        {!data ?
          <Grid isMobile={isMobile}>
            {[...Array(15)].map(item => (
              <Item />
            ))}
          </Grid>
          :
          <Grid isMobile={isMobile}>
            {data.slice(0, dataLength).map((item) =>
              <Item isMobile={isMobile}>
                <img width="54" height="54" src={`/categories/${item.img}.png`} />
                <p>{item.title}</p>
              </Item>)}
          </Grid>
        }
      </Container>
    </Fade>
  )
}

export default Categories