"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedCategories } from "@/components/featured-categories"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { createClient } from "@/lib/supabase/client"
import type { Product } from "@/lib/supabase/types"
import { Spinner } from "@/components/ui/spinner"

export default function HomePage() {
  const { t, isRTL } = useLanguage()
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFeaturedProducts() {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("featured", true)
        .order("created_at", { ascending: false })
        .limit(8)

      if (error) {
        console.error("Error fetching products:", error)
      } else {
        setFeaturedProducts(data || [])
      }
      setLoading(false)
    }

    fetchFeaturedProducts()
  }, [])

  const mappedProducts = featuredProducts.map((p) => ({
    id: p.id,
    name: p.name,
    price: Number(p.price),
    brandColor: p.color || "#F3BA2F",
  }))

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? "font-[family-name:var(--font-arabic)]" : ""}`}>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedCategories />
        <section className={`py-16 bg-secondary/50 ${isRTL ? "font-[family-name:var(--font-arabic)]" : ""}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">{t("featuredProducts")}</h2>
              <p className="mt-2 text-muted-foreground">
                {t("topSellingCards")}
              </p>
            </div>
            {loading ? (
              <div className="flex justify-center py-12">
                <Spinner className="h-8 w-8" />
              </div>
            ) : (
              <ProductGrid products={mappedProducts} showFilters={false} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
