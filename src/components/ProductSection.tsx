import { products } from '../data/products'
import { ProductCard } from './ProductCard'

export function ProductSection() {
  return (
    <section className="section" id="catalog">
      <div className="section-heading">
        <p className="eyebrow">Популярные решения</p>
        <h2>Программы 1С, которые чаще всего выбирают компании</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </section>
  )
}
