import LandingPage from './components/LandingPage'
import About from './components/About'
import Projects from './components/Projects'
import Header from './components/Header'
import Contact from './components/Contact'
import Spline from './components/Spline'

function App() {
  return (
    <main className="relative overflow-hidden">
      <Spline />
      <Header />
      <LandingPage />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}

export default App
