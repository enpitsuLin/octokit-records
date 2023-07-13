import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './provider'
import Header from '@/components/Header'
import { AmbienceBackground } from '@/components/AmbienceScene'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '我看过的',
  description: '我看过的',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hans">
      <body className={inter.className}>
        <Providers>
          <AmbienceBackground />
          <main className="relative mx-auto inset-0 transition-all duration-300 md:max-w-4xl md:mx-auto">
            <Header />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
