"use client"

import { Search, Zap, Shield, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t, isRTL } = useLanguage()

  return (
    <section className={`relative overflow-hidden bg-foreground text-background ${isRTL ? "font-[family-name:var(--font-arabic)]" : ""}`}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F3BA2F]/20 px-4 py-1.5 text-sm font-medium text-[#F3BA2F] mb-6">
            <Zap className="h-4 w-4" />
            <span>{t("instantDigitalDelivery")}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            {t("digitalGiftCards")}
            <br />
            <span className="text-[#F3BA2F]">{t("deliveredInstantly")}</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/70">
            {t("heroDescription")}
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-10 max-w-xl">
            <div className={`flex gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="relative flex-1">
                <Search className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground ${isRTL ? "right-4" : "left-4"}`} />
                <Input
                  type="search"
                  placeholder={t("searchHeroPlaceholder")}
                  className={`h-12 text-foreground bg-card border-0 rounded-lg ${isRTL ? "pr-12 pl-4 text-right" : "pl-12 pr-4"}`}
                  dir={isRTL ? "rtl" : "ltr"}
                />
              </div>
              <Button className="h-12 px-6 bg-[#F3BA2F] text-foreground hover:bg-[#F3BA2F]/90 font-semibold">
                {t("search")}
              </Button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className={`mt-12 flex flex-wrap justify-center gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
            <div className={`flex items-center gap-2 text-sm text-background/70 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Clock className="h-5 w-5 text-[#F3BA2F]" />
              <span>{t("instantDelivery")}</span>
            </div>
            <div className={`flex items-center gap-2 text-sm text-background/70 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Shield className="h-5 w-5 text-[#F3BA2F]" />
              <span>{t("securePayment")}</span>
            </div>
            <div className={`flex items-center gap-2 text-sm text-background/70 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Zap className="h-5 w-5 text-[#F3BA2F]" />
              <span>{t("support247")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
