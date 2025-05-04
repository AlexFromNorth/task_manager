import cn from 'clsx'
import { type TextareaHTMLAttributes, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

type TypeTextAreaField = TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextareaField = forwardRef<
	HTMLTextAreaElement,
	TypeTextAreaField
>(({ className, ...rest }, ref) => {
	const { t } = useTranslation()

	return (
		<textarea
			className={cn(
				'bg-transparent border-none focus:outline-0 focus:shadow-transparent w-full',
				className
			)}
			placeholder={rest.name == 'name' ? t('Your Task') : t('Task Description')}
			ref={ref}
			{...rest}
		/>
	)
})

TextareaField.displayName = 'TextareaField'
