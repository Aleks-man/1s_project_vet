import { serviceSteps } from '../data/site'

export function ServiceSteps() {
  return (
    <section className="section split-section" id="services">
      <div>
        <p className="eyebrow">Автоматизация под ключ</p>
        <h2>Не просто продаем коробку, а доводим учет до рабочего процесса</h2>
      </div>
      <div className="service-list">
        {serviceSteps.map((step) => (
          <article key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
