"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit3, ImageIcon, MessageSquare, PenTool, Code, FileText, Briefcase } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ToolExamplesPage() {
  const { t } = useLanguage()

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("tools.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("tools.description")}</p>
        </div>

        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid grid-cols-4 mb-12">
            <TabsTrigger value="content">{t("tools.content")}</TabsTrigger>
            <TabsTrigger value="image">{t("tools.image.gen")}</TabsTrigger>
            <TabsTrigger value="business">{t("tools.business")}</TabsTrigger>
            <TabsTrigger value="developer">{t("tools.developer")}</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Edit3 className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.blogPost")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.blog.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.blog.input")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                      <MessageSquare className="h-6 w-6 text-pink-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.sns")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.sns.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.sns.input")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <PenTool className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.advertising")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.ad.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.ad.input")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.email.title")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.email.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.email.input")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.product.title")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.product.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.product.input")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.summary.title")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.summary.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.summary.input")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="image" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <ImageIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.dalle.title")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.dalle.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.dalle.input")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <ImageIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.productVis.title")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.productVis.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.productVis.input")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <ImageIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.logo.title")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.logo.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.logo.input")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="business" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.business.plan.title")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.business.plan.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.business.plan.input")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Briefcase className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.marketing.title")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.marketing.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.marketing.input")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Briefcase className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.swot.title")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.swot.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.swot.input")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="developer" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Code className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.code.title")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.code.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.code.input")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Code className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.api.title")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.api.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.api.input")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Code className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{t("tools.db.title")}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t("tools.db.desc")}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">{t("tools.example.input")}</p>
                    <p className="text-sm font-medium mt-1">{t("tools.db.input")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
