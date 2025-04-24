'use client'

import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { COLORS } from '@/constants/color.constants'

import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

const year = new Date().getFullYear()

export function Sidebar() {
	const { t, i18n } = useTranslation()

	const switchLanguage = (lang: string) => {
		i18n.changeLanguage(lang) // Переключаем язык
	}

	return (
		<aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
			<div>
				<h1>{t('welcome_message')}</h1> {/* Пример перевода по ключу */}
				<p>{t('description')}</p>
				<button onClick={() => switchLanguage('en')}>Switch to English</button>
				<button onClick={() => switchLanguage('ru')}>
					Переключиться на русский
				</button>
			</div>

			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout border-b border-b-border'
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
					/>
					<span className='text-2xl font-bold relative'>
						Planner
						<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
							beta
						</span>
					</span>
				</Link>
				<div className='p-3 relative'>
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
			<footer className='text-xs opacity-40 font-normal text-center p-layout'>
				{year} &copy; With love.
				<br /> All rights reserved.
			</footer>
		</aside>
	)
}
