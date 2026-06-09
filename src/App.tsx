import { CtaSection } from './components/CtaSection'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { IndustrySection } from './components/IndustrySection'
import { ProductSection } from './components/ProductSection'
import { ServiceSteps } from './components/ServiceSteps'
import { BenefitsStrip } from './components/BenefitsStrip'
import './App.css'

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <BenefitsStrip />
      <ProductSection />
      <ServiceSteps />
      <IndustrySection />
      <CtaSection />
    </main>
  )
}

export default App
