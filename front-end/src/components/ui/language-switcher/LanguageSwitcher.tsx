'use client'

import { useTranslation } from 'react-i18next'

import './LanguageSwitcher.module.scss'

export function LanguageSwitcher() {
	const { t, i18n } = useTranslation()

	const switchLanguage = (lang: string) => {
		i18n.changeLanguage(lang)
	}

	const currentLanguage = i18n.language

	return (
		<div className='relative inline-block group'>
			{currentLanguage === 'ru' && (
				<button
					onClick={() => switchLanguage('en')}
					className='relative w-10 h-10 bg-white/20 text-white rounded hover:border transition'
				>
					{t('RU')}
				</button>
			)}
			{currentLanguage === 'en' && (
				<button
					onClick={() => switchLanguage('ru')}
					className='relative w-10 h-10 bg-white/20 text-white rounded hover:border transition'
				>
					{t('EN')}
				</button>
			)}

			{/* Tooltip */}
			<div className='absolute -translate-x-3/4 mt-2 w-max px-3 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'>
				{currentLanguage === 'ru' && 'Switch to English' }
				{currentLanguage === 'en' && 'Переключить на русский' }
			</div>
		</div>
	)
}
