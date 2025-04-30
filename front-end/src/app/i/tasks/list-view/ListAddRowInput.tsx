'use client'

import { useState } from 'react'
import { type Dispatch, type SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'

import { taskService } from '@/services/task.service'
import type { ITaskResponse } from '@/types/task.types'

import styles from './ListView.module.scss'

interface IListAddRowInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function ListAddRowInput({ setItems, filterDate }: IListAddRowInput) {
	const { t } = useTranslation()
	const [isLoading, setIsLoading] = useState(false)

	const addRow = async () => {
		try {
			setIsLoading(true)

			const response = await taskService.createTask({
				name: '',
				description: '',
				createdAt: filterDate
			})

			const newTask = response.data

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
		<div className={styles.addRow}>
			<button
				onClick={addRow}
				className='italic opacity-40 text-sm'
				disabled={isLoading}
			>
				{isLoading ? t('Loading...') : t('Add task...')}
			</button>
		</div>
	)
}
