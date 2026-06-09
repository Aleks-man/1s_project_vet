import { benefits } from '../data/site'

export function BenefitsStrip() {
  return (
    <section className="partner-strip" aria-label="Преимущества">
      {benefits.map((benefit) => (
        <div key={benefit}>{benefit}</div>
      ))}
    </section>
  )
}
