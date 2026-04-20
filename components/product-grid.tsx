"use client"

import { ProductCard } from "@/components/product-card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

interface Product {
  id: string
  name: string
  price: number
  brandColor: string
}

interface ProductGridProps {
  products: Product[]
  title?: string
  showFilters?: boolean
}

export function ProductGrid({ products, title, showFilters = true }: ProductGridProps) {
  const [sortBy, setSortBy] = useState("price-asc")
  const { t, isRTL } = useLanguage()

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price
      case "price-desc":
        return b.price - a.price
      case "name-asc":
        return a.name.localeCompare(b.name)
      case "name-desc":
        return b.name.localeCompare(a.name)
      default:
        return 0
    }
  })

  return (
    <div className={isRTL ? "font-[family-name:var(--font-arabic)]" : ""}>
      {/* Header */}
      {(title || showFilters) && (
        <div className={`mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ${isRTL ? "sm:flex-row-reverse" : ""}`}>
          {title && (
            <div className={isRTL ? "text-right" : ""}>
              <h2 className="text-2xl font-bold text-foreground">{title}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {products.length} {t("productsAvailable")}
              </p>
            </div>
          )}
          {showFilters && (
            <div className={`flex gap-3 ${isRTL ? "justify-end" : ""}`}>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t("sortBy")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">{t("priceLowToHigh")}</SelectItem>
                  <SelectItem value="price-desc">{t("priceHighToLow")}</SelectItem>
                  <SelectItem value="name-asc">{t("nameAZ")}</SelectItem>
                  <SelectItem value="name-desc">{t("nameZA")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      )}

      {/* Grid */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            brandColor={product.brandColor}
          />
        ))}
      </div>
    </div>
  )
}
