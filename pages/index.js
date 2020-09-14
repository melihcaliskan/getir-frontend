import Apps from '../components/Apps'
import CTA from "../components/CTA"
import Categories from "../components/Categories"
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from "../components/Loader"
import Offers from "../components/Offers"
import styled from 'styled-components'
const Container = styled.div`
  display:flex;
  flex-direction:column;
  max-width:75%;
  margin: 0 auto;
  padding: 0 2em;

  @media only screen and (max-width: 1440px) {
    max-width:100%;
    padding: 0 5em;
  }

  @media only screen and (max-width: 740px) {
    padding:0 1em;
  }
`

const Home = (props) => {
  const { loading, t, isLight, theme, toggleTheme, isMobile } = props
  if (loading) {
    return <Loader />
  }
  return (
    <>
      <Container>
        <Header {...props} />
        <CTA  {...props} />
        <Categories {...props} />
        <Offers {...props} />
        <Apps {...props} />
      </Container>
      <Footer />
    </>
  )
}

export default Home