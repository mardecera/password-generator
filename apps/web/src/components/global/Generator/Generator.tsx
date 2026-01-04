'use client'

import { useTranslations } from 'next-intl'
import Tabs from '../Tabs/Tabs'
import { TabsProps } from '../Tabs/Tabs.types'
import { GeneratorProps } from './Generator.types'
import { twMerge } from 'tailwind-merge'

const Generator = (props: GeneratorProps) => {
	const t = useTranslations('home')

	const { className } = props

	const tabs: TabsProps['tabs'] = [
		{
			label: t('generator.tabs.random'),
			content: 'Content 1',
			key: '1',
		},
		{
			label: t('generator.tabs.memorable'),
			content: 'Content 2',
			key: '2',
		},
		{
			label: t('generator.tabs.pin'),
			content: 'Content 3',
			key: '3',
		},
	]

	return (
		<div
			className={twMerge('bg-white p-5 rounded-sm max-h-fit w-full', className)}
		>
			<div className="mb-5 font-medium text-[14px]">{t('generator.title')}</div>
			<Tabs tabs={tabs}>
				<div className="py-4">{t('generator.subtitle')}</div>
			</Tabs>
		</div>
	)
}

export default Generator
