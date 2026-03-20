import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['200', '300'] })
import StarsCanvas from '@/components/main/StarBackground'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'
import ScrollReset from '@/components/main/ScrollReset'
import CursorStar from '@/components/main/CursorStar'
import SmoothScroll from '@/components/main/SmoothScroll'
import BackgroundMusicPlayer from '@/components/main/BackgroundMusicPlayer'
import ScrollProgressBar from '@/components/main/ScrollProgressBar'
import ScrollSnap from '@/components/main/ScrollSnap'
import { MusicProvider } from '@/contexts/MusicContext'
import { backgroundSongs } from '@/constants/songs'

export const metadata: Metadata = {
  title: 'Angela Weigl',
  description: 'Angela Weigl Personal Website',
  icons: {
    icon: '/favicon.svg',
    apple: '/sparkle-icon.png',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zzr2qke.css" />
        <link rel="stylesheet" href="https://use.typekit.net/obt7zqt.css" />
      </head>
      <body className={`${dmSans.variable} font-tt-ramillas bg-[#000914] overflow-y-scroll overflow-x-hidden`}>
        <MusicProvider 
          defaultTracks={backgroundSongs}
          autoStart={false}
        >
          <SmoothScroll>
            <ScrollReset />
            <CursorStar />
            {children}
            <StarsCanvas />
            <Navbar />
            <ScrollProgressBar />
            <ScrollSnap />
            <Footer />
            <BackgroundMusicPlayer />
          </SmoothScroll>
        </MusicProvider>
      </body>
    </html>
  )
}
