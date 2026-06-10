import { useMemo, useState } from 'react'
import { productCategories, products, type ProductCategory } from '../data/products'
import { ProductCard } from './ProductCard'

type ActiveCategory = ProductCategory | 'all'

export function CatalogTabs() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('all')

  const activeCategoryData = productCategories.find((category) => category.id === activeCategory)

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return products
    }

    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="catalog-tabs">
      <div className="tab-list" role="tablist" aria-label="Категории программ 1С">
        {productCategories.map((category) => (
          <button
            aria-selected={activeCategory === category.id}
            className="tab-button"
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            role="tab"
            type="button"
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="tab-summary">
        <strong>{activeCategoryData?.label}</strong>
        <span>{activeCategoryData?.description}</span>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}
