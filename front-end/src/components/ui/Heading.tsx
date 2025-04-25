'use client'

import { useTranslation } from "react-i18next"

interface IHeading {
	title: string
}

export function Heading({ title }: IHeading) {
	const { t } = useTranslation()

	return (
		<div>
			<h1 className='text-3xl font-medium'>{t(title)}</h1>
			<div className='my-3 h-0.5 bg-border w-full' />
		</div>
	)
}
