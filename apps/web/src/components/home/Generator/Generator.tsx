'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

import { GeneratorProps } from './Generator.types'
import { generatorTabs } from './Generator.helpers'
import Tabs from '@/components/global/Tabs/Tabs'

const Generator = (props: GeneratorProps) => {
	const { className } = props
	const t = useTranslations('home')

	const [tab, setTab] = useState('1')

	const tabs = generatorTabs(t)

	return (
		<div
			className={twMerge(
				'bg-white p-5 rounded-2xl max-h-fit w-full',
				className
			)}
		>
			<div className="mb-5 font-medium text-[14px]">{t('generator.title')}</div>
			<Tabs
				tabs={tabs}
				activeTab={tab}
				onTabClick={setTab}
				tabStyles={{
					buttonTabClassName: 'text-[14px] font-medium',
				}}
			>
				<div className="font-medium text-[14px] pt-4 pb-3">
					{t('generator.subtitle')}
				</div>
			</Tabs>
		</div>
	)
}

export default Generator
