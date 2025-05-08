"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HowToUsePage() {
  const { t } = useLanguage()

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("howto.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("howto.subtitle")}</p>
        </div>

        <div className="mb-20">
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt={t("howto.title")}
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2">
                <span>{t("howto.watch")}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t("howto.steps.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("howto.step1.title")}</h3>
                <p className="text-gray-600">{t("howto.step1.desc")}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("howto.step2.title")}</h3>
                <p className="text-gray-600">{t("howto.step2.desc")}</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("howto.step3.title")}</h3>
                <p className="text-gray-600">{t("howto.step3.desc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t("howto.interface.title")}</h2>

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">{t("howto.interface.image")}</h3>
                <p className="text-gray-600 mb-6">{t("howto.interface.desc")}</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t("howto.interface.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t("howto.interface.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t("howto.interface.feature3")}</span>
                  </li>
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">{t("howto.interface.try")}</Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt={t("howto.interface.image")}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t("howto.faq.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">{t("howto.faq.expertise.q")}</h3>
              <p className="text-gray-600">{t("howto.faq.expertise.a")}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">{t("howto.faq.time.q")}</h3>
              <p className="text-gray-600">{t("howto.faq.time.a")}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">{t("howto.faq.edit.q")}</h3>
              <p className="text-gray-600">{t("howto.faq.edit.a")}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">{t("howto.faq.limit.q")}</h3>
              <p className="text-gray-600">{t("howto.faq.limit.a")}</p>
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
