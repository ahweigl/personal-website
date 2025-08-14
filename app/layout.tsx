import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarBackground'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'
import ScrollReset from '@/components/main/ScrollReset'
import CursorStar from '@/components/main/CursorStar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Angela Weigl',
  description: 'Angela Weigl Personal Website',
  icons: {
    icon: '/sparkle-icon.png',
    apple: '/sparkle-icon.png',
    shortcut: '/sparkle-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#000914] overflow-y-scroll overflow-x-hidden`}>
        <ScrollReset />
        <CursorStar />
        {children}
        <StarsCanvas />
        <Navbar />
        <Footer />
      </body>
    </html>
  )
}
