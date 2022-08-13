import SectionContainer from './SectionContainer'
import Footer from './Footer'
import NavBar from './NavBar'

const LayoutWrapper = ({ children }) => {
  return (
    <>
        <NavBar />   
        <SectionContainer>
        <main className="overflow-x-hidden">{children}</main>
        </SectionContainer>
        <Footer />    
        </>
  )
}

export default LayoutWrapper
