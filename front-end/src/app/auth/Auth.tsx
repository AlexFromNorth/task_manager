'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'

import { IAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { authService } from '@/services/auth.service'

export function Auth() {
	const { t } = useTranslation()

	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success(t('Successfully login!'))
			reset()
			push(DASHBOARD_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className='flex min-h-screen'>
			<form
				className='w-1/4 m-auto shadow bg-sidebar rounded-xl p-layout'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Heading title={t('Auth')} />

				<Field
					id='email'
					label={t('Email:')}
					placeholder={t('Enter email:')}
					type='email'
					extra='mb-4'
					{...register('email', {
						required: t('Email is required!')
					})}
				/>

				<Field
					id='password'
					label={t('Password: ')}
					placeholder={t('Enter password: ')}
					type='password'
					{...register('password', {
						required: t('Password is required!')
					})}
					extra='mb-6'
				/>

				<div className='flex items-center gap-5 justify-center'>
					<Button onClick={() => setIsLoginForm(true)}>{t('Login')}</Button>
					<Button onClick={() => setIsLoginForm(false)}>{t('Register')}</Button>
				</div>
			</form>
		</div>
	)
}
