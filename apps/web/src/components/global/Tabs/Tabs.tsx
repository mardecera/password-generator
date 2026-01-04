'use client'

import { useState } from 'react'
import { TabsProps } from './Tabs.types'
import { twMerge } from 'tailwind-merge'

const Tabs = (props: TabsProps) => {
	const { tabs, className, tabsClassName, contentClassName, children } = props

	const [activeTab, setActiveTab] = useState(tabs[0].key)

	const handleTabClick = (key: string) => {
		setActiveTab(key)
	}

	return (
		<div className={twMerge(className)}>
			<div
				className={twMerge(
					'flex flex-row flex-wrap bg-[#3031360d] p-2 rounded-sm',
					tabsClassName
				)}
			>
				{tabs.map((tab, index) => (
					<button
						key={index}
						className={twMerge(
							'bg-transparent px-5 py-2 rounded-sm cursor-pointer flex-1 text-xs',
							activeTab === tab.key && 'bg-white'
						)}
						onClick={() => handleTabClick(tab.key)}
					>
						{tab.label}
					</button>
				))}
			</div>
			{children}
			<div className={twMerge(contentClassName)}>
				{tabs.find((tab) => tab.key === activeTab)?.content}
			</div>
		</div>
	)
}

export default Tabs
