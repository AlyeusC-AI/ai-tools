"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Edit3, ImageIcon, MessageSquare, Code, FileText, Briefcase } from "lucide-react"
import { useState } from "react"

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const recentTools = [
    { id: 1, name: 'Blog Post Generator', icon: <Edit3 className="h-5 w-5" />, category: 'Content' },
    { id: 2, name: 'Instagram Post', icon: <MessageSquare className="h-5 w-5" />, category: 'Social Media' },
    { id: 3, name: 'Product Description', icon: <FileText className="h-5 w-5\" />, category: 'E-commerce'  },
    { id: 3, name: 'Product Description', icon: <FileText className="h-5 w-5" />, category: 'E-commerce' },
    { id: 4, name: 'Logo Design', icon: <ImageIcon className="h-5 w-5" />, category: 'Image' },
    { id: 5, name: 'React Component', icon: <Code className="h-5 w-5" />, category: 'Developer' },
  ]

  const favoriteTools = [
    { id: 1, name: "Blog Post Generator", icon: <Edit3 className="h-5 w-5" />, category: "Content" },
    { id: 2, name: "DALL-E Image Generator", icon: <ImageIcon className="h-5 w-5" />, category: "Image" },
    { id: 3, name: "Marketing Strategy", icon: <Briefcase className="h-5 w-5" />, category: "Business" },
  ]

  return (
    <div className="py-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Access your AI tools and generated content.</p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search for tools..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all-tools" className="mb-8">
          <TabsList>
            <TabsTrigger value="all-tools">All Tools</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="my-content">My Content</TabsTrigger>
          </TabsList>

          <TabsContent value="all-tools" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <Edit3 className="h-4 w-4 text-blue-600" />
                    </div>
                    Content Creation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">Generate blog posts, articles, and more</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      Blog Posts
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      Articles
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      Product Descriptions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-2">
                      <MessageSquare className="h-4 w-4 text-pink-600" />
                    </div>
                    Social Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">Create engaging social media content</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                      <ImageIcon className="h-4 w-4 text-purple-600" />
                    </div>
                    Image Generation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">Create custom images with AI</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      DALL-E
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      Logo Design
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      Product Images
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <Briefcase className="h-4 w-4 text-green-600" />
                    </div>
                    Business Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">Business planning and strategy tools</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      Business Plan
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      Marketing Strategy
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      SWOT Analysis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentTools.map((tool) => (
                <Card key={tool.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{tool.name}</h3>
                      <p className="text-sm text-gray-500">{tool.category}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {favoriteTools.map((tool) => (
                <Card key={tool.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{tool.name}</h3>
                      <p className="text-sm text-gray-500">{tool.category}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-content" className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-lg font-medium mb-4">Recently Generated Content</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Blog Post: Benefits of AI in Marketing</h4>
                      <p className="text-sm text-gray-500">Generated on May 8, 2025</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <div className="p-4 border border-gray-200 rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Product Description: Wireless Headphones</h4>
                      <p className="text-sm text-gray-500">Generated on May 7, 2025</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <div className="p-4 border border-gray-200 rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">DALL-E Image: Futuristic City</h4>
                      <p className="text-sm text-gray-500">Generated on May 5, 2025</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Usage Statistics</CardTitle>
              <CardDescription>Your token usage for the current billing period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Tokens Used</span>
                    <span className="text-sm text-gray-500">25,000 / 50,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">Content Generation</p>
                    <p className="text-xl font-semibold">15,000</p>
                    <p className="text-xs text-gray-500">60% of total usage</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">Image Generation</p>
                    <p className="text-xl font-semibold">8,000</p>
                    <p className="text-xs text-gray-500">32% of total usage</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">Other Tools</p>
                    <p className="text-xl font-semibold">2,000</p>
                    <p className="text-xs text-gray-500">8% of total usage</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
