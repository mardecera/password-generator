'use client'

import { useTranslations } from 'next-intl'

const Button = () => {
	const t = useTranslations('HomePage')

	return (
		<button className="bg-black text-white rounded-lg py-2 px-4 cursor-pointer">
			{t('welcome')}
		</button>
	)
}

export default Button
