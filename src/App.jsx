import Bio from "./Components/Bio.jsx"
import Hero from "./Components/Hero.jsx"
import Navbar from "./Components/Navbar.jsx"
import Projects from "./Components/Projects.jsx"
import Skills from "./Components/Skills.jsx"
import WorkExperience from "./Components/WorkExperience.jsx"
import EducationSection from "./Components/EducationSection.jsx"
import Footer from "./Components/Footer.jsx"
const App =() => {
  return(
    <div className="relative h-full overflow-y-auto antialiased">
    <div className ="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
    <div className="relative z-10 flex flex-col items-center p-4 spacey-y-8 container mx-auto">
      <Hero />
      <Navbar />
      <Projects />
      <Bio/>
      <Skills />
      <WorkExperience />
      <EducationSection />
      <Footer />
    </div>
    </div>
  )
}

export default App