import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { IMenuItem } from './menu.interface'

export function MenuItem({ item }: { item: IMenuItem }) {
	const { t } = useTranslation()

	return (
		<div>
			<Link
				href={item.link}
				className='flex gap-2.5 items-center py-1.5 mt-2 px-layout transition-colors hover:bg-border rounded-lg'
			>
				<item.icon />
				<span>{t(item.name)}</span>
			</Link>
		</div>
	)
}
