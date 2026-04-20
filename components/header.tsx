"use client"

import Link from "next/link"
import { Search, ShoppingCart, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount] = useState(0)
  const { t, isRTL } = useLanguage()

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("products"), href: "/products" },
    { name: t("categories"), href: "/categories" },
    { name: t("about"), href: "/about" },
    { name: t("contact"), href: "/contact" },
  ]

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border bg-card ${isRTL ? "font-[family-name:var(--font-arabic)]" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F3BA2F]">
              <span className="text-lg font-bold text-foreground">G</span>
            </div>
            <span className="text-xl font-bold text-foreground">GiftNova</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground ${isRTL ? "right-3" : "left-3"}`} />
              <Input
                type="search"
                placeholder={t("searchPlaceholder")}
                className={`w-full h-10 bg-secondary border-border ${isRTL ? "pr-10 pl-4 text-right" : "pl-10 pr-4"}`}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className={`absolute -top-1 h-5 w-5 rounded-full bg-[#F3BA2F] text-xs font-medium flex items-center justify-center text-foreground ${isRTL ? "-left-1" : "-right-1"}`}>
                  {cartCount}
                </span>
              )}
              <span className="sr-only">{t("cart")}</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">{t("account")}</span>
            </Button>
            <Button className="hidden sm:flex bg-foreground text-background hover:bg-foreground/90">
              {t("signIn")}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">{t("menu")}</span>
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground ${isRTL ? "right-3" : "left-3"}`} />
            <Input
              type="search"
              placeholder={t("searchPlaceholder")}
              className={`w-full h-10 bg-secondary border-border ${isRTL ? "pr-10 pl-4 text-right" : "pl-10 pr-4"}`}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 text-base font-medium text-muted-foreground hover:text-foreground ${isRTL ? "text-right" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-border">
              <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                {t("signIn")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
