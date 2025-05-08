"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ProductOverviewPage() {
  const { t } = useLanguage()

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("overview.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("overview.description")}</p>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-blue-600 font-medium mb-4">{t("overview.subtitle")}</div>
              <h2 className="text-3xl font-bold mb-6">{t("overview.heading")}</h2>
              <p className="text-gray-600 mb-8">{t("overview.description")}</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                {t("overview.cta")}
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="All-in-One AI Platform"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t("overview.keyFeatures")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("overview.feature.tools")}</h3>
                <p className="text-gray-600">{t("overview.feature.tools.desc")}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("overview.feature.ui")}</h3>
                <p className="text-gray-600">{t("overview.feature.ui.desc")}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("overview.feature.quality")}</h3>
                <p className="text-gray-600">{t("overview.feature.quality.desc")}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("overview.feature.language")}</h3>
                <p className="text-gray-600">{t("overview.feature.language.desc")}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("overview.feature.storage")}</h3>
                <p className="text-gray-600">{t("overview.feature.storage.desc")}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("overview.feature.updates")}</h3>
                <p className="text-gray-600">{t("overview.feature.updates.desc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t("overview.toolCategories")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t("overview.category.content")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Blog posts and articles</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Social media content</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Email newsletters</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Product descriptions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t("overview.category.image")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Marketing visuals</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Product images</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Logo design</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Artistic illustrations</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t("overview.category.business")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Business plans</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Marketing strategies</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>SWOT analysis</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Financial projections</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t("overview.category.developer")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Code generation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>API documentation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Database schemas</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Technical specifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t("overview.technology")}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-6">{t("overview.advancedAI")}</h3>
              <p className="text-gray-600 mb-6">{t("overview.techDescription")}</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("overview.integration")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("overview.expertPrompts")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("overview.regularUpdates")}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="AI Technology"
                width={800}
                height={600}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            {t("common.tryFree")}
          </Button>
        </div>
      </div>
    </div>
  )
}
