"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Operating company</span>
            <span className="text-sm">Operating company</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Terms of service</span>
            <span className="text-sm">Terms of service</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Privacy Policy</span>
            <span className="text-sm">Privacy Policy</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Inquiry</span>
            <span className="text-sm">Inquiry</span>
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} All-in-One AI. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
