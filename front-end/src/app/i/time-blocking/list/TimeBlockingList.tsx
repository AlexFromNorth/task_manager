import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useTranslation } from 'react-i18next'

import Loader from '@/components/ui/Loader'

import { calcHoursLeft } from '../calc-hours-left'
import { useTimeBlockDnd } from '../hooks/useTimeBlockDnd'
import { useTimeBlocks } from '../hooks/useTimeBlocks'

import { TimeBlock } from './TimeBlock'
import styles from './TimeBlock.module.scss'

export function TimeBlockingList() {
	const { t } = useTranslation()
	const { items, setItems, isLoading } = useTimeBlocks()
	const { handleDragEnd, sensors } = useTimeBlockDnd(items, setItems)

	if (isLoading) return <Loader />

	const { hoursLeft } = calcHoursLeft(items)

	return (
		<div>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<div className={styles.list}>
					<SortableContext
						items={items || []}
						strategy={verticalListSortingStrategy}
					>
						{items?.length ? (
							items.map(item => (
								<TimeBlock
									key={item.id}
									item={item}
								/>
							))
						) : (
							<div>{t('Add the first time-block on the right form')}</div>
						)}
					</SortableContext>
				</div>
			</DndContext>
			<div>
				{hoursLeft > 0
					? t('{{count}} hours out of 24 left for sleep', { count: hoursLeft })
					: t('No hours left for sleep')}
			</div>
		</div>
	)
}
