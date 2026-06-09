import './App.css'

const navItems = [
  'Программы 1С',
  'Сервисы 1С',
  'Сопровождение',
  'Оборудование',
  'Акции',
  'О компании',
]

const categories = [
  '1С Бухгалтерия',
  '1С Розница',
  '1С Управление торговлей',
  '1С УНФ',
  '1С ЗУП',
  '1С Документооборот',
]

const products = [
  {
    name: '1С:Бухгалтерия 8 ПРОФ',
    price: '23 000 ₽',
    text: 'Учет, налоги, отчетность и работа с первичными документами.',
  },
  {
    name: '1С:Управление нашей фирмой',
    price: '30 600 ₽',
    text: 'Продажи, склад, производство, финансы и CRM для малого бизнеса.',
  },
  {
    name: '1С:Зарплата и управление персоналом',
    price: 'от 39 700 ₽',
    text: 'Кадровый учет, расчет зарплаты и регламентированная отчетность.',
  },
  {
    name: '1С:Управление торговлей',
    price: '39 700 ₽',
    text: 'Оптовая и розничная торговля, закупки, склад и аналитика.',
  },
]

const benefits = [
  'Официальные лицензии 1С',
  'Подбор программы под задачу',
  'Установка и первичная настройка',
  'Сопровождение и обновления',
]

const industries = [
  'Торговля',
  'Медицина и фармацевтика',
  'Строительство',
  'Общепит',
  'Услуги',
  'Транспорт и логистика',
]

function App() {
  return (
    <main>
      <header className="site-header" aria-label="Главная навигация">
        <a className="brand" href="/" aria-label="Вектор учета">
          <span className="brand-mark">1С</span>
          <span>
            <strong>Вектор учета</strong>
            <small>официальные решения для бизнеса</small>
          </span>
        </a>

        <nav className="main-nav">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <a className="phone-link" href="tel:+79990000000">
          +7 999 000-00-00
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Лицензии, внедрение и сопровождение 1С в Крыму</p>
          <h1>1С в Симферополе и Севастополе для учета и автоматизации бизнеса</h1>
          <p className="hero-copy">
            Подберем программу, поможем с покупкой лицензии, установкой,
            настройкой, обновлениями и сопровождением 1С для компаний в
            Симферополе, Севастополе, Керчи, Евпатории, Ялте, Феодосии и
            других городах Крыма.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#catalog">
              Подобрать 1С
            </a>
            <a className="button button-secondary" href="#contact">
              Заказать звонок
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Ключевые направления">
          <div className="panel-topline">
            <span>Каталог</span>
            <strong>1С 8.3</strong>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <a href="#catalog" key={category}>
                {category}
              </a>
            ))}
          </div>
        </aside>
      </section>

      <section className="partner-strip" aria-label="Преимущества">
        {benefits.map((benefit) => (
          <div key={benefit}>{benefit}</div>
        ))}
      </section>

      <section className="section" id="catalog">
        <div className="section-heading">
          <p className="eyebrow">Популярные решения</p>
          <h2>Программы 1С, которые чаще всего выбирают компании</h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-visual" aria-hidden="true">
                <span>1С</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.text}</p>
              <div className="product-footer">
                <strong>{product.price}</strong>
                <a href="#contact">Заказать</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Автоматизация под ключ</p>
          <h2>Не просто продаем коробку, а доводим учет до рабочего процесса</h2>
        </div>
        <div className="service-list">
          <article>
            <span>01</span>
            <h3>Подбор</h3>
            <p>Разбираем учетные задачи и выбираем конфигурацию без переплаты.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Запуск</h3>
            <p>Устанавливаем платформу, базу, права пользователей и начальные настройки.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Сопровождение</h3>
            <p>Обновляем 1С, консультируем пользователей и подключаем полезные сервисы.</p>
          </article>
        </div>
      </section>

      <section className="section" id="оборудование">
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

      <section className="cta-section" id="contact">
        <div>
          <p className="eyebrow">Консультация специалиста</p>
          <h2>Есть вопрос по 1С? Обсудим задачу и предложим решение</h2>
          <p>
            Оставьте заявку или позвоните. Подскажем по лицензиям, ценам,
            переходу на 1С 8.3, сопровождению ИТС и торговому оборудованию.
          </p>
        </div>
        <a className="button button-primary" href="tel:+79990000000">
          Позвонить
        </a>
      </section>
    </main>
  )
}

export default App
