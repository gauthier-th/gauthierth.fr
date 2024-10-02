import Link from "next/link"
import { Ubuntu } from "next/font/google"
import LoadAnimation from "@/components/LoadAnimation"
import StarsBackground from "@/components/StarsBackground"
import SmoothLink from "@/components/SmoothLink"
import Sidebar from "@/components/Sidebar"

import "./globals.css"

export const metadata = {
  title: "Gauthier's website"
}

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div id="sky-background" />
        <StarsBackground />
        <div className="min-h-screen flex flex-col justify-center items-center py-8">
          <nav className="fixed top-0 w-full h-16 bg-black/50 backdrop-blur border-b border-gray-600/80 flex items-center justify-end sm:justify-center">
            <div className="hidden sm:grid grid-cols-2 items-center gap-44 text-lg md:text-xl">
              <div className="flex gap-6">
                <SmoothLink destId="">Home</SmoothLink>
                <SmoothLink destId="projects">Projects</SmoothLink>
              </div>
              <div className="flex gap-6">
                <SmoothLink destId="contact">Contact</SmoothLink>
                <Link href="https://github.com/gauthier-th" target="_blank">GitHub</Link>
              </div>
            </div>
            <Sidebar>
              <div className="mt-8 flex flex-col justify-center items-center gap-4 text-2xl">
                <SmoothLink destId="">Home</SmoothLink>
                <SmoothLink destId="projects">Projects</SmoothLink>
                <SmoothLink destId="contact">Contact</SmoothLink>
                <Link href="https://github.com/gauthier-th" target="_blank">GitHub</Link>
              </div>
            </Sidebar>
          </nav>
          <div className="flex-1 w-full">
            {children}
          </div>
        </div>
        <LoadAnimation />
      </body>
    </html>
  )
}