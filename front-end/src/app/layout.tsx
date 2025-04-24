import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { Toaster } from 'sonner'
import { I18nProvider } from '@/components/provider/I18nProvider'

import './globals.scss'
import { Providers } from './providers'
import { SITE_NAME } from '@/constants/seo.constants'

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
        <I18nProvider>
          <Providers>
            {children}
            <Toaster theme="dark" position="bottom-right" duration={1500} />
          </Providers>
        </I18nProvider>
      </body>
    </html>
  )
}
