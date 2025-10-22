import Hero from './components/Hero'
import About from './components/About'
import Problem from './components/Problem'
import OurSolutions from './components/OurSolutions'
import ExpectedGains from './components/ExpectedGains'
import FlowSection from './components/FlowSection'
import Investment from './components/Investment'
import NextSteps from './components/NextSteps'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 snap-container">
      <Hero />
      <About />
      <Problem />
      <OurSolutions />
      <FlowSection />
      <ExpectedGains />
      <Investment />
      <NextSteps />
    </div>
  )
}

export default App
