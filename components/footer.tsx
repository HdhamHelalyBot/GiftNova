"use client"

import Link from "next/link"
import { CreditCard, Shield, Headphones } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const paymentMethods = [
  { name: "Visa", icon: "V" },
  { name: "Mastercard", icon: "M" },
  { name: "PayPal", icon: "P" },
  { name: "Bitcoin", icon: "B" },
  { name: "USDT", icon: "T" },
]

export function Footer() {
  const { t, isRTL } = useLanguage()

  const footerLinks = {
    company: [
      { name: t("aboutUs"), href: "/about" },
      { name: t("contact"), href: "/contact" },
      { name: t("careers"), href: "/careers" },
      { name: t("blog"), href: "/blog" },
    ],
    support: [
      { name: t("helpCenter"), href: "/help" },
      { name: t("faq"), href: "/faq" },
      { name: t("orderStatus"), href: "/order-status" },
      { name: t("returns"), href: "/returns" },
    ],
    legal: [
      { name: t("privacyPolicy"), href: "/privacy" },
      { name: t("termsOfService"), href: "/terms" },
      { name: t("cookiePolicy"), href: "/cookies" },
      { name: t("refundPolicy"), href: "/refund" },
    ],
  }

  return (
    <footer className={`border-t border-border bg-card ${isRTL ? "font-[family-name:var(--font-arabic)]" : ""}`}>
      {/* Trust Banner */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3BA2F]/10">
                <CreditCard className="h-6 w-6 text-[#F3BA2F]" />
              </div>
              <div className={isRTL ? "text-right" : ""}>
                <h4 className="font-semibold text-foreground">{t("securePaymentTitle")}</h4>
                <p className="text-sm text-muted-foreground">{t("securePaymentDesc")}</p>
              </div>
            </div>
            <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3BA2F]/10">
                <Shield className="h-6 w-6 text-[#F3BA2F]" />
              </div>
              <div className={isRTL ? "text-right" : ""}>
                <h4 className="font-semibold text-foreground">{t("moneyBackTitle")}</h4>
                <p className="text-sm text-muted-foreground">{t("moneyBackDesc")}</p>
              </div>
            </div>
            <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3BA2F]/10">
                <Headphones className="h-6 w-6 text-[#F3BA2F]" />
              </div>
              <div className={isRTL ? "text-right" : ""}>
                <h4 className="font-semibold text-foreground">{t("support247Title")}</h4>
                <p className="text-sm text-muted-foreground">{t("support247Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className={`grid gap-8 lg:grid-cols-5 ${isRTL ? "text-right" : ""}`}>
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F3BA2F]">
                <span className="text-lg font-bold text-foreground">G</span>
              </div>
              <span className="text-xl font-bold text-foreground">GiftNova</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              {t("footerDescription")}
            </p>
            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-sm font-medium text-foreground mb-3">{t("weAccept")}</p>
              <div className={`flex gap-2 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="flex h-8 w-12 items-center justify-center rounded border border-border bg-secondary text-xs font-semibold text-muted-foreground"
                    title={method.name}
                  >
                    {method.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground">{t("company")}</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">{t("supportTitle")}</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">{t("legal")}</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} GiftNova. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
