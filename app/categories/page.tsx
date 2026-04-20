"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryCard } from "@/components/category-card"
import { ChevronRight, ChevronLeft, Gamepad2, Tv, ShoppingBag, Bitcoin, Utensils } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function CategoriesPage() {
  const { t, isRTL } = useLanguage()
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight

  const categoryGroups = [
    {
      title: t("gaming"),
      icon: Gamepad2,
      categories: [
        {
          name: "Steam",
          description: t("steamDesc"),
          href: "/products/steam",
          brandColor: "#1B2838",
          productCount: 10,
        },
        {
          name: "PlayStation",
          description: t("playstationDesc"),
          href: "/products/playstation",
          brandColor: "#003087",
          productCount: 9,
        },
        {
          name: "Xbox",
          description: t("xboxDesc"),
          href: "/products/xbox",
          brandColor: "#107C10",
          productCount: 8,
        },
        {
          name: "Roblox",
          description: t("robloxDesc"),
          href: "/products/roblox",
          brandColor: "#E60012",
          productCount: 6,
        },
      ],
    },
    {
      title: t("streaming"),
      icon: Tv,
      categories: [
        {
          name: "Netflix",
          description: t("netflixDesc"),
          href: "/products/netflix",
          brandColor: "#E50914",
          productCount: 6,
        },
        {
          name: "Spotify",
          description: t("spotifyDesc"),
          href: "/products/spotify",
          brandColor: "#1DB954",
          productCount: 5,
        },
      ],
    },
    {
      title: t("shopping"),
      icon: ShoppingBag,
      categories: [
        {
          name: "Amazon",
          description: t("amazonDesc"),
          href: "/products/amazon",
          brandColor: "#FF9900",
          productCount: 12,
        },
        {
          name: "Apple",
          description: t("appleDesc"),
          href: "/products/apple",
          brandColor: "#555555",
          productCount: 8,
        },
        {
          name: "Google Play",
          description: t("googlePlayDesc"),
          href: "/products/google-play",
          brandColor: "#34A853",
          productCount: 7,
        },
      ],
    },
    {
      title: t("crypto"),
      icon: Bitcoin,
      categories: [
        {
          name: "Binance USDT",
          description: t("binanceDesc"),
          href: "/products/binance-usdt",
          brandColor: "#F3BA2F",
          productCount: 8,
        },
      ],
    },
    {
      title: t("foodDelivery"),
      icon: Utensils,
      categories: [
        {
          name: "Uber Eats",
          description: t("uberEatsDesc"),
          href: "/products/uber",
          brandColor: "#000000",
          productCount: 5,
        },
        {
          name: "DoorDash",
          description: t("doordashDesc"),
          href: "/products/doordash",
          brandColor: "#FF3008",
          productCount: 4,
        },
      ],
    },
  ]

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? "font-[family-name:var(--font-arabic)]" : ""}`}>
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-foreground text-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className={`flex items-center gap-2 text-sm text-background/70 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Link href="/" className="hover:text-background transition-colors">
                {t("home")}
              </Link>
              <ChevronIcon className="h-4 w-4" />
              <span className="text-background font-medium">{t("categories")}</span>
            </nav>

            <h1 className={`text-3xl sm:text-4xl font-bold ${isRTL ? "text-right" : ""}`}>{t("allCategories")}</h1>
            <p className={`mt-3 text-background/70 max-w-2xl ${isRTL ? "text-right" : ""}`}>
              {t("browseCategories")}
            </p>
          </div>
        </section>

        {/* Category Groups */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            {categoryGroups.map((group) => (
              <div key={group.title}>
                <div className={`flex items-center gap-3 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F3BA2F]/10">
                    <group.icon className="h-5 w-5 text-[#F3BA2F]" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{group.title}</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {group.categories.map((category) => (
                    <CategoryCard key={category.name} {...category} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
