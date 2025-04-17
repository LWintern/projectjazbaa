import Navbar from './components/customComponents/figma/Navbar'
import { TeamGrid } from './components/customComponents/figma/TakingJazbaaToNextLevel'
import { TransformationStories } from './components/customComponents/figma/TransformationStories'
import ProcessFlow from './components/customComponents/figma/ProcessFlow'
import JazbaaStats from './components/customComponents/figma/JazbaaStats'
import AboutLinuxWorld from './components/customComponents/figma/AboutLinuxWorld'
import InvestorsSection from './components/customComponents/figma/InvesterSection'
import EnhancedMasonryGallery from './components/customComponents/figma/MasonaryGallary'
import Footer from './components/customComponents/figma/Footer'
import Footer2 from './components/customComponents/figma/Footer2'
import StartupCarousel from './components/customComponents/figma/StartupCarousel'
import StatisticsSection from './components/customComponents/figma/JazbaaStats'


export default function Home() {
  return (
   <>

  <Navbar />
  <StatisticsSection />
  <StartupCarousel/>
  <EnhancedMasonryGallery />
  <TeamGrid />
<InvestorsSection />
  <TransformationStories />
  <ProcessFlow/>
  <AboutLinuxWorld ></AboutLinuxWorld>
  
  <JazbaaStats />
   
  
  
  
  <Footer2 />
  <Footer />
   </>
  )
}
