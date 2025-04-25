'use client'

import { type Dispatch, type SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'

import type { ITaskResponse } from '@/types/task.types'

interface IKanbanAddCardInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanAddCardInput({
	setItems,
	filterDate
}: IKanbanAddCardInput) {
	const { t } = useTranslation()

	const addCard = () => {
		setItems(prev => {
			if (!prev) return

			return [
				...prev,
				{
					id: '',
					name: '',
					isCompleted: false,
					createdAt: filterDate
				}
			]
		})
	}

	return (
		<div className='mt-5'>
			<button
				onClick={addCard}
				className='italic opacity-40 text-sm'
			>
				{t('Add task...')} 
			</button>
		</div>
	)
}
