import ETA from "./ETA"
import Separator from "../components/Separator"
import fetcher from "../helpers/fetcher"
import styled from 'styled-components'
import useSWR from 'swr'
const ICON = () => (
  <svg viewBox="0 0 20 20">
    <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
  </svg>
)

const Container = styled.div`
  margin-top:5em;
`
const Title = styled.p`
  text-align:center;
  font-size:24px;
`
const Grid = styled.div`
  background:${({ theme }) => theme.HOME_CATEGORY_BG};
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.isMobile ? 2 : 5}, 1fr)`}; 
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
  cursor:pointer;
  
  padding:1.5em 1.5em;
  width:160px;
  height:160px;
  background:${({ theme }) => theme.body};
  border-radius:30px;
  box-shadow: 0px 2px 8px -2px #C1BADE;
    
  transition: all 0.5s ease;
  &:nth-child(-n+5){
    margin-top:-7em;
  }

  img{
    object-fit:contain;
  }

  &:hover{
    transform: translateY(-8px);
    background:${({ theme }) => "#FFFBEB"};
  }
`

const Categories = ({ isMobile }) => {
  const { data, error } = useSWR('/api/categories', fetcher)
  if (!data) {
    return "loading"
  }
  return (
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
      <Grid isMobile={isMobile}>
        {data.map((item) =>
          <Item>
            <img width="54" height="54" src={`/categories/${item.img}.png`} />
            <p>{item.title}</p>
          </Item>)}
      </Grid>
    </Container>
  )
}

export default Categories