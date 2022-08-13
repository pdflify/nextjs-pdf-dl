import SectionContainer from './SectionContainer'
import Footer from './Footer'
import NavBar from './NavBar'
import NextNProgress from 'nextjs-progressbar'
const LayoutWrapper = ({ children }) => {
  return (
    <div>
      <NextNProgress
         color="#ef4444"
         startPosition={0.3}
         stopDelayMs={200}
         height={2}
         showOnShallow={true}
      />
       <NavBar/> 
        <SectionContainer>
        <main className="overflow-x-hidden">{children}</main>
        </SectionContainer>
        <Footer/>   
    </div>
  )
}

export default LayoutWrapper
