'use client'

import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

import { GeneratorProps } from './Generator.types'
import { generatorTabs } from './Generator.factory'
import Tabs from '@/components/global/Tabs/Tabs'

const Generator = (props: GeneratorProps) => {
	const { className } = props
	const t = useTranslations('home')

	const [tab, setTab] = useState('random')

	const tabs = useMemo(() => generatorTabs(t), [t])
	const subTitle = useMemo(() => {
		return tabs.find(({ key }) => key === tab)?.subLabel
	}, [tab, tabs])

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
				<div className="font-medium text-[14px] pt-4 pb-3">{subTitle}</div>
			</Tabs>
		</div>
	)
}

export default Generator
