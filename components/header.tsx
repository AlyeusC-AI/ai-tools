"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"

const navigation = [
  { name: "nav.productOverview", href: "/product-overview" },
  { name: "nav.howToUse", href: "/how-to-use" },
  { name: "nav.toolExamples", href: "/tool-examples" },
  { name: "nav.pricingPlans", href: "/pricing" },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">All-in-One AI</span>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-2">
                <div className="w-6 h-6 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-xl font-bold text-purple-600">All-in-One AI</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${
                pathname === item.href ? "text-purple-600" : "text-gray-900"
              } hover:text-purple-600`}
            >
              {t(item.name)}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          {/* Language selector dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                <span className={language === "en" ? "font-bold" : ""}>{t("language.english")}</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("ja")}>
                <span className={language === "ja" ? "font-bold" : ""}>{t("language.japanese")}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" asChild>
            <Link href="/login">{t("nav.login")}</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">{t("nav.signup")}</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 flex">
            <div className="w-full">
              <div className="flex items-center justify-between p-6">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">All-in-One AI</span>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-2">
                      <div className="w-6 h-6 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-xl font-bold text-purple-600">All-in-One AI</span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6 px-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        pathname === item.href ? "text-purple-600" : "text-gray-900"
                      } hover:bg-gray-50`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(item.name)}
                    </Link>
                  ))}
                </div>
                <div className="py-6 px-6 space-y-3">
                  {/* Language selector in mobile menu */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Globe className="h-5 w-5 text-gray-500" />
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setLanguage("en")}
                        className={`px-2 py-1 rounded ${
                          language === "en" ? "bg-gray-200 font-medium" : "text-gray-600"
                        }`}
                      >
                        {t("language.english")}
                      </button>
                      <button
                        onClick={() => setLanguage("ja")}
                        className={`px-2 py-1 rounded ${
                          language === "ja" ? "bg-gray-200 font-medium" : "text-gray-600"
                        }`}
                      >
                        {t("language.japanese")}
                      </button>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/login">{t("nav.login")}</Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/signup">{t("nav.signup")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
