'use client'

import cn from 'clsx'
import { Kanban, ListTodo } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import type { TypeView } from './TasksView'

interface ISwitcherView {
	type: TypeView
	setType: (value: TypeView) => void
}

export function SwitcherView({ setType, type }: ISwitcherView) {
	const { t } = useTranslation()

	return (
		<div className='flex items-center gap-4 mb-5'>
			<button
				className={cn('flex items-center gap-1', {
					'opacity-40': type === 'kanban'
				})}
				onClick={() => setType('list')}
			>
				<ListTodo />
				{t('List')}
			</button>
			<button
				className={cn('flex items-center gap-1', {
					'opacity-40': type === 'list'
				})}
				onClick={() => setType('kanban')}
			>
				<Kanban />
				{t('Board')}
			</button>
		</div>
	)
}
