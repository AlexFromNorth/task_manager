'use client'

import { FormProvider, useForm } from 'react-hook-form'

import type { TypeTimeBlockFormState } from '@/types/time-block.types'

import { TimeBlockingForm } from './form/TimeBlockingForm'
import { TimeBlockingList } from './list/TimeBlockingList'

export function TimeBlocking() {
	const methods = useForm<TypeTimeBlockFormState>()

	return (
		<FormProvider {...methods}>
			<div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12'>
				<TimeBlockingList />
				<TimeBlockingForm />
			</div>
		</FormProvider>
	)
}
