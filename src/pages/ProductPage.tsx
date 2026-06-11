import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { CtaSection } from '../components/CtaSection'
import { products } from '../data/products'

type ProductPageProps = {
  onCallbackRequest: () => void
}

export function ProductPage({ onCallbackRequest }: ProductPageProps) {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  useEffect(() => {
    if (!product) {
      return
    }

    document.title = `${product.name} в Крыму и Севастополе | Купить и настроить 1С`
  }, [product])

  if (!product) {
    return <Navigate replace to="/catalog" />
  }

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3)

  return (
    <main>
      <section className="product-page-hero visual-backdrop visual-backdrop--grocery">
        <div className="product-page-copy">
          <Link className="breadcrumb-link" to="/catalog">
            ← Каталог 1С
          </Link>
          <div className="product-tags">
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h1>{product.name}</h1>
          <p>{product.detailTitle}</p>
          <div className="product-page-meta">
            <span>{product.delivery}</span>
            <strong>{product.price}</strong>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Получить консультацию
            </a>
            {product.sourceUrl ? (
              <a className="button button-secondary" href={product.sourceUrl} rel="noreferrer" target="_blank">
                Официальная информация 1С
              </a>
            ) : null}
          </div>
        </div>

        <div className="product-page-media">
          <span>Выбранный продукт</span>
          {product.image ? <img src={product.image} alt={product.imageAlt ?? product.name} /> : null}
          <div className="selected-product-summary">
            <strong>{product.name}</strong>
            <small>{product.delivery}</small>
            <b>{product.price}</b>
          </div>
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="section-heading">
          <p className="eyebrow">Подробно о выбранной программе</p>
          <h2>{product.name}: назначение, задачи и запуск</h2>
        </div>
        <div className="product-detail-layout product-detail-layout--intro">
          <article className="product-detail-card">
            <span className="detail-card-label">Описание</span>
            <p>{product.detailText}</p>
          </article>
          <div className="product-detail-card">
            <span className="detail-card-label">Ключевые возможности</span>
            <h3>Ключевые возможности</h3>
            <ul className="product-detail-list">
              {product.detailPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section visual-backdrop visual-backdrop--mixed">
        <div className="section-heading">
          <p className="eyebrow">Польза для бизнеса</p>
          <h2>Кому подходит программа и какие задачи она закрывает</h2>
        </div>
        <div className="product-info-grid">
          <article>
            <span className="detail-card-label">Кому подходит</span>
            <ul className="product-detail-list">
              {product.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <span className="detail-card-label">Какие задачи закрывает</span>
            <ul className="product-detail-list">
              {product.tasks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <span className="detail-card-label">Что сделаем при запуске</span>
            <ul className="product-detail-list">
              {product.purchaseIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section visual-backdrop visual-backdrop--electronics">
        <div className="section-heading">
          <p className="eyebrow">Внедрение и поддержка</p>
          <h2>Поможем не только купить лицензию, но и запустить работу в 1С</h2>
        </div>
        <div className="feature-grid">
          <article>
            <h3>Подберем поставку</h3>
            <p>Уточним задачи, количество пользователей, формат работы и подскажем подходящую лицензию.</p>
          </article>
          <article>
            <h3>Установим и настроим</h3>
            <p>Подготовим базу, пользователей, права доступа, начальные настройки и обмены при необходимости.</p>
          </article>
          <article>
            <h3>Возьмем на поддержку</h3>
            <p>Поможем с обновлениями, консультациями, исправлением ошибок и стабильной работой базы.</p>
          </article>
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="section product-related-section">
          <div className="section-heading">
            <p className="eyebrow">Похожие решения</p>
            <h2>Можно сравнить с другими программами 1С</h2>
          </div>
          <div className="related-product-grid">
            {relatedProducts.map((item) => (
              <Link className="related-product-card" key={item.slug} to={`/catalog/${item.slug}`}>
                {item.image ? <img src={item.image} alt={item.imageAlt ?? item.name} /> : null}
                <span>{item.name}</span>
                <strong>{item.price}</strong>
                <small>Подробнее...</small>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="product-bottom-nav">
        <Link className="breadcrumb-link" to="/catalog">
          ← Вернуться в каталог 1С
        </Link>
      </section>

      <CtaSection onCallbackRequest={onCallbackRequest} />
    </main>
  )
}
