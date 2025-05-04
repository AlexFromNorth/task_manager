import cn from 'clsx'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Badge } from '@/components/ui/Badge'

import { useOutside } from '@/hooks/useOutside'

export interface IOption {
	label: string
	value: string
}

interface ISingleSelect {
	data: IOption[]
	onChange: (value: string) => void
	value: string
	isColorSelect?: boolean
}

export function SingleSelect({
	data,
	onChange,
	value,
	isColorSelect
}: ISingleSelect) {
	const { isShow, setIsShow, ref } = useOutside(false)
	const { t } = useTranslation()

	const getValue = () => data.find(item => item.value === value)?.label

	return (
		<div
			className={cn('relative w-[90px]', {
				'w-max': isColorSelect
			})}
			ref={ref}
		>
			<button
				onClick={e => {
					e.preventDefault()
					setIsShow(!isShow)
				}}
			>
				{getValue() ? (
					<Badge
						variant={value}
						className='capitalize'
						style={isColorSelect ? { backgroundColor: value } : {}}
					>
						{t(getValue()!)}
					</Badge>
				) : (
					<Badge>{t('Click for select')}</Badge>
				)}
			</button>
			{value && (
				<button
					className='absolute top-[-5px] right-0 opacity-75 hover:opacity-100 transition-opacity'
					onClick={e => {
						e.preventDefault()
						onChange('')
					}}
				>
					<X size={19} />
				</button>
			)}
			{isShow && (
				<div
					className={cn(
						'absolute w-full p-2.5 left-0 slide bg-sidebar z-10 shadow rounded-lg'
					)}
					style={{
						top: 'calc(100% + .5rem)'
					}}
				>
					{data.map(item => {
						console.log(1, item.value)
						return (
							<button
								key={item.value}
								onClick={e => {
									e.preventDefault()
									onChange(item.value)
									setIsShow(false)
								}}
								className='block mb-4 last:mb-0 capitalize rounded-lg'
								style={
									isColorSelect
										? {
												backgroundColor: item.value
											}
										: {}
								}
							>
								<Badge variant={item.value}>{t(item.label)}</Badge>
							</button>
						)
					})}
				</div>
			)}
		</div>
	)
}
