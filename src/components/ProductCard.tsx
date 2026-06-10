import type { Product } from '../data/products'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className={`product-visual ${product.image ? 'product-visual--image' : 'product-visual--placeholder'}`}>
        {product.image ? (
          <img className="product-image" src={product.image} alt={product.imageAlt ?? product.name} loading="lazy" />
        ) : (
          <div className="product-placeholder" aria-hidden="true">
            <span className="product-placeholder-logo">
              <img src="/logo-1c.svg" alt="" />
            </span>
            <span className="product-placeholder-category">
              {product.category === 'accounting'
                ? 'Учет'
                : product.category === 'trade'
                  ? 'Торговля'
                  : product.category === 'hr'
                    ? 'Кадры'
                    : product.category === 'workflow'
                      ? 'Документы'
                      : 'Бизнес'}
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
        <a href="#contact">Заказать</a>
      </div>
    </article>
  )
}
