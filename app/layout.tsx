import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aura Smile Studio - Travel Agency",
  description: "Your premier travel agency in Antalya, Turkey",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <LanguageProvider>
          <Header />
          <main className="flex-grow pt-20 md:pt-24">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
