import cn from 'clsx'
import { type InputHTMLAttributes, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement>

export const TransparentField = forwardRef<
	HTMLInputElement,
	TypeTransparentField
>(({ className, ...rest }, ref) => {

	console.log(className)
	console.log(ref)
	console.log(rest)

	const { t } = useTranslation()

	return (
		<input
			className={cn(
				'bg-transparent border-none focus:outline-0 focus:shadow-transparent w-full',
				className
			)}
			placeholder={rest.name=='name'?t('Your Task'):t('Task Description')}
			ref={ref}
			{...rest}
		/>
	)
})

TransparentField.displayName = 'TransparentField'
