import { industries } from '../data/site'

export function IndustrySection() {
  return (
    <section className="section visual-backdrop visual-backdrop--mixed" id="equipment">
      <div className="section-heading">
        <p className="eyebrow">Отраслевые решения</p>
        <h2>Подберем конфигурацию под вашу сферу</h2>
      </div>
      <div className="industry-grid">
        {industries.map((industry) => (
          <a href="#contact" key={industry}>
            {industry}
          </a>
        ))}
      </div>
    </section>
  )
}
