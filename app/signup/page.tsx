"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function SignupPage() {
  const { t } = useLanguage()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
    console.log("Signup attempt with:", { name, email, password, acceptTerms })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">{t("signup.title")}</CardTitle>
          <CardDescription className="text-center">{t("signup.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t("signup.name")}</Label>
              <Input id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("signup.email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t("signup.password")}</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                required
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("signup.terms")}{" "}
                <Link href="/terms" className="text-blue-600 hover:text-blue-800">
                  {t("signup.termsLink")}
                </Link>{" "}
                {t("signup.and")}{" "}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
                  {t("signup.privacyLink")}
                </Link>
              </label>
            </div>
            <Button type="submit" className="w-full" disabled={!acceptTerms}>
              {t("signup.button")}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">{t("signup.or")}</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                {t("signup.google")}
              </Button>
              <Button variant="outline" className="w-full">
                {t("signup.apple")}
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            {t("signup.hasAccount")}{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              {t("signup.login")}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
