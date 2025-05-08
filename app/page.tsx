"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Check, Edit3, ImageIcon, MessageSquare, PenTool } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#051527] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"></div>
          {/* Network pattern overlay */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-no-repeat bg-cover"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t("hero.title")}</h1>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">{t("hero.subtitle")}</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            {t("hero.cta")}
          </Button>
        </div>
      </section>

      {/* Concerns Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">{t("concerns.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="aspect-square relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("concerns.tooMany.title")}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-purple-600 mb-2">
                  {t("concerns.tooMany.title")}
                </h3>
                <p className="text-sm text-gray-600 text-center">{t("concerns.tooMany.description")}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="aspect-square relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("concerns.difficulty.title")}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-purple-600 mb-2">
                  {t("concerns.difficulty.title")}
                </h3>
                <p className="text-sm text-gray-600 text-center">{t("concerns.difficulty.description")}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="aspect-square relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("concerns.barrier.title")}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-purple-600 mb-2">
                  {t("concerns.barrier.title")}
                </h3>
                <p className="text-sm text-gray-600 text-center">{t("concerns.barrier.description")}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="aspect-square relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("concerns.tedious.title")}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-purple-600 mb-2">
                  {t("concerns.tedious.title")}
                </h3>
                <p className="text-sm text-gray-600 text-center">{t("concerns.tedious.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">{t("solutions.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="aspect-square relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("solutions.optimized.title")}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-purple-600 mb-2">
                  {t("solutions.optimized.title")}
                </h3>
                <p className="text-sm text-gray-600 text-center">{t("solutions.optimized.description")}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="aspect-square relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("solutions.easy.title")}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-purple-600 mb-2">{t("solutions.easy.title")}</h3>
                <p className="text-sm text-gray-600 text-center">{t("solutions.easy.description")}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="aspect-square relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("solutions.noPrompt.title")}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-purple-600 mb-2">
                  {t("solutions.noPrompt.title")}
                </h3>
                <p className="text-sm text-gray-600 text-center">{t("solutions.noPrompt.description")}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="aspect-square relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("solutions.tested.title")}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-purple-600 mb-2">
                  {t("solutions.tested.title")}
                </h3>
                <p className="text-sm text-gray-600 text-center">{t("solutions.tested.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">{t("overview.title")}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-blue-600 font-medium mb-4">{t("overview.subtitle")}</div>
              <h3 className="text-3xl font-bold mb-6">{t("overview.heading")}</h3>
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
      </section>

      {/* Tool Examples Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">{t("tools.title")}</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">{t("tools.description")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Edit3 className="h-12 w-12 text-blue-500" />
              </div>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">{t("tools.blogPost")}</Button>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-12 w-12 text-white" />
              </div>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">{t("tools.sns")}</Button>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                <PenTool className="h-12 w-12 text-white" />
              </div>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">{t("tools.advertising")}</Button>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <ImageIcon className="h-12 w-12 text-white" />
              </div>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">{t("tools.image")}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{t("pricing.title")}</h2>
          <p className="text-center text-gray-600 mb-16">{t("pricing.description")}</p>

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

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              {t("common.tryFree")}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to simplify your AI experience?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already benefiting from our prompt-free AI tools.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            {t("common.tryFree")}
          </Button>
        </div>
      </section>
    </div>
  )
}
