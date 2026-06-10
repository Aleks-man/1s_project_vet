import { benefits } from '../data/site'

const benefitIcons = ['👍', '🎯', '⚙', '🛠']

export function BenefitsStrip() {
  return (
    <section className="partner-strip" aria-label="Преимущества">
      {benefits.map((benefit, index) => (
        <div className="benefit-item" key={benefit}>
          <span className="benefit-icon" aria-hidden="true">
            {benefitIcons[index]}
          </span>
          <span>{benefit}</span>
        </div>
      ))}
    </section>
  )
}
