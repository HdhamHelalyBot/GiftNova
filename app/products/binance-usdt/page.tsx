"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ChevronRight, ChevronLeft, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const binanceProducts = [
  { id: "b1", name: "Binance USDT Gift Card $1", price: 1, brandColor: "#F3BA2F" },
  { id: "b5", name: "Binance USDT Gift Card $5", price: 5, brandColor: "#F3BA2F" },
  { id: "b10", name: "Binance USDT Gift Card $10", price: 10, brandColor: "#F3BA2F" },
  { id: "b25", name: "Binance USDT Gift Card $25", price: 25, brandColor: "#F3BA2F" },
  { id: "b50", name: "Binance USDT Gift Card $50", price: 50, brandColor: "#F3BA2F" },
  { id: "b100", name: "Binance USDT Gift Card $100", price: 100, brandColor: "#F3BA2F" },
  { id: "b250", name: "Binance USDT Gift Card $250", price: 250, brandColor: "#F3BA2F" },
  { id: "b500", name: "Binance USDT Gift Card $500", price: 500, brandColor: "#F3BA2F" },
]

export default function BinanceUSDTPage() {
  const { t, isRTL } = useLanguage()
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? "font-[family-name:var(--font-arabic)]" : ""}`}>
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-[#F3BA2F]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className={`flex items-center gap-2 text-sm text-foreground/70 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Link href="/" className="hover:text-foreground transition-colors">
                {t("home")}
              </Link>
              <ChevronIcon className="h-4 w-4" />
              <Link href="/products" className="hover:text-foreground transition-colors">
                {t("products")}
              </Link>
              <ChevronIcon className="h-4 w-4" />
              <span className="text-foreground font-medium">Binance USDT</span>
            </nav>

            <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 ${isRTL ? "lg:flex-row-reverse" : ""}`}>
              <div className={isRTL ? "text-right" : ""}>
                <div className={`flex items-center gap-3 mb-3 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-foreground/10 backdrop-blur-sm">
                    <span className="text-2xl font-bold text-foreground">B</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Binance USDT {t("products")}
                  </h1>
                </div>
                <p className="text-foreground/80 max-w-xl">
                  {t("binanceDesc")}
                </p>
              </div>

              {/* Trust Badges */}
              <div className={`flex flex-wrap gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className={`flex items-center gap-2 rounded-lg bg-foreground/10 px-4 py-2 text-sm text-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Zap className="h-4 w-4" />
                  <span>{t("instantDelivery")}</span>
                </div>
                <div className={`flex items-center gap-2 rounded-lg bg-foreground/10 px-4 py-2 text-sm text-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Shield className="h-4 w-4" />
                  <span>{t("securePayment")}</span>
                </div>
                <div className={`flex items-center gap-2 rounded-lg bg-foreground/10 px-4 py-2 text-sm text-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Clock className="h-4 w-4" />
                  <span>{t("support247")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ProductGrid
              products={binanceProducts}
              title={t("step1")}
              showFilters={true}
            />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              {t("howItWorks")}
            </h2>
            <div className={`grid gap-6 sm:grid-cols-3 ${isRTL ? "direction-rtl" : ""}`}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3BA2F] text-foreground font-bold">
                  1
                </div>
                <h3 className="font-semibold text-foreground">{t("step1")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("step1Desc")}
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3BA2F] text-foreground font-bold">
                  2
                </div>
                <h3 className="font-semibold text-foreground">{t("step2")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("step2Desc")}
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3BA2F] text-foreground font-bold">
                  3
                </div>
                <h3 className="font-semibold text-foreground">{t("step3")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("step3Desc")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
