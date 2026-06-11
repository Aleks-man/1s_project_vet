import type { KeyboardEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { Product, ProductCategory } from '../data/products'

type ProductCardProps = {
  product: Product
}

const categoryLabels: Record<ProductCategory, string> = {
  accounting: 'Учет',
  trade: 'Торговля',
  management: 'Бизнес',
  hr: 'Кадры',
  workflow: 'Документы',
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate()
  const productUrl = `/catalog/${product.slug}`

  const openProductPage = () => {
    navigate(productUrl)
  }

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget || !['Enter', ' '].includes(event.key)) {
      return
    }

    event.preventDefault()
    openProductPage()
  }

  return (
    <article
      aria-label={`Подробнее о ${product.name}`}
      className="product-card"
      onClick={openProductPage}
      onKeyDown={handleCardKeyDown}
      role="link"
      tabIndex={0}
    >
      <div className={`product-visual ${product.image ? 'product-visual--image' : 'product-visual--placeholder'}`}>
        {product.image ? (
          <img className="product-image" src={product.image} alt={product.imageAlt ?? product.name} loading="lazy" />
        ) : (
          <div className="product-placeholder" aria-hidden="true">
            <span className="product-placeholder-logo">
              <img src="/logo-1c.svg" alt="" />
            </span>
            <span className="product-placeholder-category">
              {categoryLabels[product.category]}
            </span>
          </div>
        )}
      </div>
      <div className="product-tags">
        {product.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <h3>{product.name}</h3>
      <p>{product.text}</p>
      <small>{product.delivery}</small>
      <div className="product-footer">
        <strong>{product.price}</strong>
        <div className="product-card-actions">
          <a className="product-order-link" href="#contact" onClick={(event) => event.stopPropagation()}>
            Заказать
          </a>
          <Link className="product-details-button" onClick={(event) => event.stopPropagation()} to={productUrl}>
            Подробнее...
          </Link>
        </div>
      </div>
    </article>
  )
}
