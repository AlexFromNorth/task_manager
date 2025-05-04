import cn from 'clsx'
import { type InputHTMLAttributes, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

type TypeInputField = InputHTMLAttributes<HTMLInputElement>

export const InputField = forwardRef<
	HTMLInputElement,
	TypeInputField
>(({ className, ...rest }, ref) => {
	const { t } = useTranslation()

	return (
		<input
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

InputField.displayName = 'InputField'
