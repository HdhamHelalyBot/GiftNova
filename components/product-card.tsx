"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

interface ProductCardProps {
  name: string
  price: number
  brandColor?: string
  brandLogo?: string
}

export function ProductCard({
  name,
  price,
  brandColor = "#F3BA2F",
}: ProductCardProps) {
  const { t, isRTL } = useLanguage()

  return (
    <Card className={`group overflow-hidden border border-border bg-card transition-all hover:shadow-lg hover:border-[#F3BA2F]/50 ${isRTL ? "font-[family-name:var(--font-arabic)]" : ""}`}>
      <CardContent className="p-0">
        {/* Brand Logo Area */}
        <div
          className="flex h-32 items-center justify-center"
          style={{ backgroundColor: brandColor }}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm">
            <span className="text-2xl font-bold text-card">{name.charAt(0)}</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className={`font-semibold text-foreground text-sm line-clamp-2 min-h-[40px] ${isRTL ? "text-right" : ""}`}>
            {name}
          </h3>
          <div className={`mt-2 flex items-center ${isRTL ? "justify-end" : "justify-between"}`}>
            <span className="text-xl font-bold text-foreground">
              ${price.toFixed(2)}
            </span>
          </div>
          <Button
            className={`mt-3 w-full bg-foreground text-background hover:bg-foreground/90 transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
            size="sm"
          >
            <ShoppingCart className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
            {t("buyNow")}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
