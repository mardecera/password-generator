import { TabsProps } from './Tabs.types'
import { twMerge } from 'tailwind-merge'

const Tabs = (props: TabsProps) => {
	const { tabs, className, tabStyles, ...rest } = props
	const { children, activeTab, onTabClick } = rest
	const { tabsClassName, contentClassName } = tabStyles || {}
	const { buttonTabClassName } = tabStyles || {}

	const handleTabClick = (key: string) => {
		onTabClick?.(key)
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
							activeTab === tab.key && 'bg-white',
							buttonTabClassName
						)}
						onClick={() => handleTabClick(tab.key)}
					>
						{tab.label}
					</button>
				))}
			</div>
			{children}
			<div className={twMerge(contentClassName)}>
				{tabs.map((tab) => {
					return (
						<div
							key={tab.key}
							className={twMerge(
								'flex flex-col justify-center items-center',
								activeTab === tab.key ? 'block' : 'hidden'
							)}
						>
							{tab.content}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Tabs
