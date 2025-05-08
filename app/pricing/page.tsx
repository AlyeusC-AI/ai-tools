"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function PricingPage() {
  const { t } = useLanguage()

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("pricing.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("pricing.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-center mb-6">{t("pricing.free.title")}</h3>
              <div className="text-3xl font-bold text-center mb-6">{t("pricing.free.price")}</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("pricing.tokens").replace("{count}", "50,000")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("pricing.tools")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("pricing.storage")}</span>
                </li>
              </ul>
              <Button className="w-full">{t("pricing.selectPlan")}</Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
              {t("pricing.starter.popular")}
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-center mb-6">{t("pricing.starter.title")}</h3>
              <div className="text-3xl font-bold text-center mb-6">{t("pricing.starter.price")}</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("pricing.tokens").replace("{count}", "150,000")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("pricing.tools.starter")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("pricing.storage")}</span>
                </li>
              </ul>
              <Button className="w-full">{t("pricing.selectPlan")}</Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-center mb-6">{t("pricing.professional.title")}</h3>
              <div className="text-3xl font-bold text-center mb-6">{t("pricing.professional.price")}</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("pricing.tokens").replace("{count}", "300,000")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("pricing.tools.professional")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("pricing.storage")}</span>
                </li>
              </ul>
              <Button className="w-full">{t("pricing.selectPlan")}</Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-center mb-6">{t("pricing.enterprise.title")}</h3>
              <div className="text-3xl font-bold text-center mb-6">{t("pricing.enterprise.price")}</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("pricing.tokens").replace("{count}", "")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("pricing.tools.professional")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("pricing.storage")}</span>
                </li>
              </ul>
              <Button className="w-full">{t("pricing.contactUs")}</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t("pricing.faq.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">{t("pricing.faq.tokens.q")}</h3>
              <p className="text-gray-600">{t("pricing.faq.tokens.a")}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">{t("pricing.faq.upgrade.q")}</h3>
              <p className="text-gray-600">{t("pricing.faq.upgrade.a")}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">{t("pricing.faq.exceed.q")}</h3>
              <p className="text-gray-600">{t("pricing.faq.exceed.a")}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">{t("pricing.faq.rollover.q")}</h3>
              <p className="text-gray-600">{t("pricing.faq.rollover.a")}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            {t("common.tryFree")}
          </Button>
        </div>
      </div>
    </div>
  )
}
