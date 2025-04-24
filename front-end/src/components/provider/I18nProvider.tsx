// src/components/I18nProvider.tsx
'use client'

import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n' // путь до твоего инициализированного инстанса i18next

interface Props {
	children: React.ReactNode
}

export function I18nProvider({ children }: Props) {
	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
