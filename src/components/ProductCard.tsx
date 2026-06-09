import type { Product } from '../data/products'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-visual" aria-hidden="true">
        <span>1С</span>
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
