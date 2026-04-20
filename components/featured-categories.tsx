"use client"

import { useEffect, useState } from "react"
import { CategoryCard } from "@/components/category-card"
import { useLanguage } from "@/contexts/language-context"
import { createClient } from "@/lib/supabase/client"
import type { Category } from "@/lib/supabase/types"
import { Spinner } from "@/components/ui/spinner"

export function FeaturedCategories() {
  const { t, isRTL } = useLanguage()
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCategories() {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("product_count", { ascending: false })
        .limit(6)

      if (error) {
        console.error("Error fetching categories:", error)
      } else {
        setCategories(data || [])
      }
      setLoading(false)
    }

    fetchCategories()
  }, [])

  return (
    <section className={`py-16 bg-background ${isRTL ? "font-[family-name:var(--font-arabic)]" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground">{t("popularCategories")}</h2>
          <p className="mt-2 text-muted-foreground">
            {t("chooseFromCategories")}
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center py-12">
            <Spinner className="h-8 w-8" />
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                description={category.description || ""}
                href={`/products/${category.slug}`}
                brandColor={category.color || "#F3BA2F"}
                productCount={category.product_count || 0}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
