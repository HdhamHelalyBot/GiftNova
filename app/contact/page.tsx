"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ChevronRight, ChevronLeft, Mail, MessageCircle, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t, isRTL } = useLanguage()
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const contactMethods = [
    {
      icon: Mail,
      title: t("email"),
      description: t("emailDesc"),
      action: t("sendMessage"),
    },
    {
      icon: MessageCircle,
      title: t("support247Title"),
      description: t("support247Desc"),
      action: t("getInTouch"),
    },
    {
      icon: Phone,
      title: t("phone"),
      description: t("phoneDesc"),
      action: t("contact"),
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

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
              <span className="text-background font-medium">{t("contact")}</span>
            </nav>

            <h1 className={`text-3xl sm:text-4xl font-bold ${isRTL ? "text-right" : ""}`}>{t("contactTitle")}</h1>
            <p className={`mt-3 text-background/70 max-w-2xl ${isRTL ? "text-right" : ""}`}>
              {t("getInTouchDesc")}
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className="rounded-lg border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3BA2F]/10">
                    <method.icon className="h-6 w-6 text-[#F3BA2F]" />
                  </div>
                  <h3 className="font-semibold text-foreground">{method.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{method.description}</p>
                  <Button variant="link" className="mt-2 text-[#F3BA2F] hover:text-[#F3BA2F]/80">
                    {method.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h2 className={`text-2xl font-bold text-foreground mb-6 ${isRTL ? "text-right" : ""}`}>{t("sendMessage")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className={isRTL ? "block text-right" : ""}>{t("firstName")}</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      dir={isRTL ? "rtl" : "ltr"}
                      className={isRTL ? "text-right" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className={isRTL ? "block text-right" : ""}>{t("lastName")}</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      dir={isRTL ? "rtl" : "ltr"}
                      className={isRTL ? "text-right" : ""}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className={isRTL ? "block text-right" : ""}>{t("emailAddress")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    dir="ltr"
                    className={isRTL ? "text-right" : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className={isRTL ? "block text-right" : ""}>{t("subject")}</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    dir={isRTL ? "rtl" : "ltr"}
                    className={isRTL ? "text-right" : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className={isRTL ? "block text-right" : ""}>{t("message")}</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    dir={isRTL ? "rtl" : "ltr"}
                    className={isRTL ? "text-right" : ""}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-foreground text-background hover:bg-foreground/90"
                >
                  {t("sendMessageButton")}
                </Button>
              </form>
            </div>

            {/* Location */}
            <div className="mt-8 text-center">
              <div className={`inline-flex items-center gap-2 text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                <MapPin className="h-4 w-4" />
                <span>{t("officeDesc")}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
