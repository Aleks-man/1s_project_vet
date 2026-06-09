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
      <h3>{product.name}</h3>
      <p>{product.text}</p>
      <div className="product-footer">
        <strong>{product.price}</strong>
        <a href="#contact">Заказать</a>
      </div>
    </article>
  )
}
