'use client'

import Loader from '@/components/ui/Loader'
import { LanguageSwitcher } from '@/components/ui/language-switcher/LanguageSwitcher'

import { useProfile } from '@/hooks/useProfile'

export function Profile() {
	const { data, isLoading } = useProfile()

	return (
		<div className='absolute top-big-layout right-big-layout'>
			{isLoading ? (
				<Loader />
			) : (
				<div className='flex items-center'>
					<div className='text-right mr-3'>
						<p className='font-bold -mb-1'>{data?.user.name}</p>
						<p className='text-sm opacity-40'>{data?.user.email}</p>
					</div>

					<div className='w-10 h-10 flex justify-center items-center text-2xl text-white bg-white/20 rounded uppercase mr-3 hover:border transition'>
						{data?.user.name?.charAt(0) || 'A'} 
						{/* {data?.user.email?.charAt(0) || 'A'} */}
					</div>

					<LanguageSwitcher />
				</div>
			)}
		</div>
	)
}
