import { BenefitsStrip } from '../components/BenefitsStrip'
import { CtaSection } from '../components/CtaSection'
import { Hero } from '../components/Hero'
import { IndustrySection } from '../components/IndustrySection'
import { ProductSection } from '../components/ProductSection'
import { ServiceSteps } from '../components/ServiceSteps'

type LandingPageProps = {
  onCallbackRequest: () => void
}

export function LandingPage({ onCallbackRequest }: LandingPageProps) {
  return (
    <main>
      <Hero onCallbackRequest={onCallbackRequest} />
      <BenefitsStrip />
      <ProductSection />
      <ServiceSteps />
      <IndustrySection />
      <CtaSection onCallbackRequest={onCallbackRequest} />
    </main>
  )
}
