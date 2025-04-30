'use client'

import { useState } from 'react'
import { type Dispatch, type SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'

import { taskService } from '@/services/task.service'
import type { ITaskResponse } from '@/types/task.types'

interface IKanbanAddCardInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanAddCardInput({
	setItems,filterDate
}: IKanbanAddCardInput) {
	const { t } = useTranslation()
	const [isLoading, setIsLoading] = useState(false)

	const addCard = async () => {
		try {
			setIsLoading(true)

			const response = await taskService.createTask({
				name: "",
				description: '',
				createdAt: filterDate
			})

		
			const newTask = response.data

			console.log(newTask)


			setItems(prev => {
				if (!prev) return [newTask] 
				return [...prev, newTask] 
			})
		} catch (error) {
			console.error('Ошибка создания задачи:', error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='mt-5'>
			<button
				onClick={addCard}
				className='italic opacity-40 text-sm'
				disabled={isLoading}
			>
				{isLoading ? t('Loading...') : t('Add task...')}
			</button>
		</div>
	)
}
