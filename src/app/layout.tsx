import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './provider'
import Header from '@/components/Header'

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
          <div className="transition-all duration-300 mx-10 md:max-w-150 md:mx-auto">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
