import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { Suspense } from 'react'

import { I18nProvider } from '@/components/provider/I18nProvider'
import { Providers } from './providers'
import { SITE_NAME } from '@/constants/seo.constants'

import './globals.scss'

// Client-only component
import ToasterClient from '@/components/toaster/ToasterClient'

const zen = Noto_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-zen',
  style: ['normal'],
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Best one for planning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={zen.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <I18nProvider>
            <Providers>
              {children}
              <ToasterClient />
            </Providers>
          </I18nProvider>
        </Suspense>
      </body>
    </html>
  )
}
