'use client'

import { I18nextProvider, useTranslation } from 'react-i18next'
import i18n from '@/lib/i18n'
import { useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export function I18nProvider({ children }: Props) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    i18n.on('initialized', () => {
      setIsReady(true)
    })

    // если уже инициализирован (на случай горячей перезагрузки)
    if (i18n.isInitialized) {
      setIsReady(true)
    }
  }, [])

  if (!isReady) return null // Можно заменить на <Loading /> или <Skeleton />

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
