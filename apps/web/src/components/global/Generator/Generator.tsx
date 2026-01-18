'use client'

import { useTranslations } from 'next-intl'
import Tabs from '../Tabs/Tabs'
import { TabsProps } from '../Tabs/Tabs.types'
import { GeneratorProps } from './Generator.types'
import { twMerge } from 'tailwind-merge'
import RandomTab from './Tabs/RandomTab'
import { useState } from 'react'

const Generator = (props: GeneratorProps) => {
	const { className } = props
	const t = useTranslations('home')

	const [tab, setTab] = useState('1')

	const tabs: TabsProps['tabs'] = [
		{
			label: t('generator.tabs.random.title'),
			content: <RandomTab />,
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
			className={twMerge(
				'bg-white p-5 rounded-2xl max-h-fit w-full',
				className
			)}
		>
			<div className="mb-5 font-medium text-[14px]">{t('generator.title')}</div>
			<Tabs tabs={tabs} activeTab={tab} onTabClick={setTab}>
				<div className="font-medium text-[14px] pt-4 pb-3">
					{t('generator.subtitle')}
				</div>
			</Tabs>
		</div>
	)
}

export default Generator
