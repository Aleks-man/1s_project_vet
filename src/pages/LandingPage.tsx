import { BenefitsStrip } from '../components/BenefitsStrip'
import { CtaSection } from '../components/CtaSection'
import { Hero } from '../components/Hero'
import { IndustrySection } from '../components/IndustrySection'
import { ProductSection } from '../components/ProductSection'
import { ServiceSteps } from '../components/ServiceSteps'

export function LandingPage() {
  return (
    <main>
      <Hero />
      <BenefitsStrip />
      <ProductSection />
      <ServiceSteps />
      <IndustrySection />
      <CtaSection />
    </main>
  )
}
