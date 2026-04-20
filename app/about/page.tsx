"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, ChevronLeft, Shield, Zap, Users, Globe } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t, isRTL } = useLanguage()
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight

  const stats = [
    { label: t("happyCustomers"), value: "50K+" },
    { label: t("giftCardsDelivered"), value: "500K+" },
    { label: t("countriesServed"), value: "150+" },
    { label: t("support247"), value: "24/7" },
  ]

  const values = [
    {
      icon: Zap,
      title: t("speed"),
      description: t("speedDesc"),
    },
    {
      icon: Shield,
      title: t("security"),
      description: t("securityDesc"),
    },
    {
      icon: Users,
      title: t("reliability"),
      description: t("reliabilityDesc"),
    },
    {
      icon: Globe,
      title: t("customerFirst"),
      description: t("customerFirstDesc"),
    },
  ]

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? "font-[family-name:var(--font-arabic)]" : ""}`}>
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-foreground text-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className={`flex items-center gap-2 text-sm text-background/70 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Link href="/" className="hover:text-background transition-colors">
                {t("home")}
              </Link>
              <ChevronIcon className="h-4 w-4" />
              <span className="text-background font-medium">{t("about")}</span>
            </nav>

            <div className={`max-w-3xl ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                {t("aboutSubtitle")}
              </h1>
              <p className="mt-6 text-lg text-background/70 leading-relaxed">
                {t("aboutDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-[#F3BA2F]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="mt-1 text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground">{t("ourStory")}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {t("ourStoryText")}
              </p>
              <h3 className="mt-10 text-2xl font-bold text-foreground">{t("ourMission")}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t("ourMissionText")}
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t("ourValues")}</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F3BA2F]/10">
                    <value.icon className="h-7 w-7 text-[#F3BA2F]" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
