"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface CategoryCardProps {
  name: string
  description: string
  href: string
  brandColor: string
  productCount: number
}

export function CategoryCard({
  name,
  description,
  href,
  brandColor,
  productCount,
}: CategoryCardProps) {
  const { t, isRTL } = useLanguage()
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  return (
    <Link href={href}>
      <Card className={`group overflow-hidden border border-border bg-card transition-all hover:shadow-lg hover:border-[#F3BA2F]/50 cursor-pointer ${isRTL ? "font-[family-name:var(--font-arabic)]" : ""}`}>
        <CardContent className="p-0">
          {/* Brand Header */}
          <div
            className="flex h-24 items-center justify-center"
            style={{ backgroundColor: brandColor }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm">
              <span className="text-xl font-bold text-card">{name.charAt(0)}</span>
            </div>
          </div>

          {/* Category Info */}
          <div className="p-4">
            <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
              <h3 className="font-semibold text-foreground">{name}</h3>
              <ArrowIcon className={`h-4 w-4 text-muted-foreground transition-transform ${isRTL ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
            </div>
            <p className={`mt-1 text-sm text-muted-foreground line-clamp-2 ${isRTL ? "text-right" : ""}`}>
              {description}
            </p>
            <p className={`mt-2 text-xs text-muted-foreground ${isRTL ? "text-right" : ""}`}>
              {productCount} {t("productsAvailable")}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
