import { heroCategories } from '../data/site'

type HeroProps = {
  onCallbackRequest: () => void
}

export function Hero({ onCallbackRequest }: HeroProps) {
  return (
    <section className="hero-section visual-backdrop visual-backdrop--hero">
      <div className="hero-content">
        <p className="eyebrow">Лицензии, внедрение, обслуживание и поддержка 1С в Крыму</p>
        <h1>1С в Крыму и Севастополе для учета и автоматизации бизнеса</h1>
        <p className="hero-copy">
          Подберем программу, поможем с покупкой лицензии, установкой,
          настройкой, обновлениями, обслуживанием и поддержкой 1С для компаний в
          Симферополе, Севастополе, Керчи, Евпатории, Ялте, Феодосии и других
          городах Крыма.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#catalog">
            Подобрать 1С
          </a>
          <button className="button button-secondary" onClick={onCallbackRequest} type="button">
            Заказать звонок
          </button>
        </div>
      </div>

      <aside className="hero-panel" aria-label="Ключевые направления">
        <div className="panel-topline">
          <span>Каталог</span>
          <strong>1С 8.3</strong>
        </div>
        <div className="category-grid">
          {heroCategories.map((category) => (
            <a href="#catalog" key={category}>
              {category}
            </a>
          ))}
        </div>
      </aside>
    </section>
  )
}
