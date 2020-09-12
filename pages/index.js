import CTA from "../components/CTA"
import Categories from "../components/Categories"
import Footer from '../components/Footer'
import Header from '../components/Header'
import Offers from "../components/Offers"
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  max-width:1280px;
  margin: 0 auto;
`

const Home = (props) => {
  const { loading, t, isLight, theme, toggleTheme } = props
  if (loading) {
    return "Loading"
  }
  return (
    <>
      <Container>
        <Header />
        <CTA />
        <Categories />
        <Offers />
      </Container>
      <Footer />
    </>
  )
}

export default Home