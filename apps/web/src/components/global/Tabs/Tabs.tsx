import { useState, useEffect, useRef } from 'react'
import { TabsProps } from './Tabs.types'
import { twMerge } from 'tailwind-merge'

const Tabs = (props: TabsProps) => {
	const { tabs, className, tabStyles, ...rest } = props
	const { children, activeTab, onTabClick } = rest
	const { tabsClassName, contentClassName } = tabStyles || {}
	const { buttonTabClassName } = tabStyles || {}

	const [activeIndex, setActiveIndex] = useState(0)
	const tabRef = useRef<HTMLDivElement>(null)
	const indicatorRef = useRef<HTMLDivElement>(null)

	const handleTabClick = (key: string, index: number) => {
		onTabClick?.(key)
		setActiveIndex(index)
	}

	useEffect(() => {
		const calcClientRect = () => {
			const tabs = tabRef.current
			const indicator = indicatorRef.current
			if (!tabs || !indicator) return

			const tab = tabs.children[activeIndex + 1]
			const tabRect = tab.getBoundingClientRect()
			const tabsRect = tabs.getBoundingClientRect()

			indicator.style.width = `${tabRect.width}px`
			indicator.style.height = `${tabRect.height}px`
			indicator.style.left = `${tabRect.left - tabsRect.left}px`
			indicator.style.top = `${tabRect.top - tabsRect.top}px`
		}

		calcClientRect()

		window.addEventListener('resize', calcClientRect)
		window.addEventListener('scroll', calcClientRect)

		return () => {
			window.removeEventListener('resize', calcClientRect)
			window.removeEventListener('scroll', calcClientRect)
		}
	}, [activeIndex])

	return (
		<div className={twMerge(className)}>
			<div className={twMerge('bg-black p-2 rounded-[10px]', tabsClassName)}>
				<div
					className={twMerge('flex flex-col sm:flex-row flex-wrap relative')}
					ref={tabRef}
				>
					<div
						className={twMerge(
							'absolute top-0 h-full bg-white z-0 rounded-md transition-all duration-300 ease-in-out'
						)}
						ref={indicatorRef}
					/>
					{tabs.map((tab, index) => (
						<button
							key={index}
							className={twMerge(
								'bg-transparent px-5 py-2 rounded-md cursor-pointer flex-1 text-xs z-1 transition-all duration-300 ease-in-out',
								activeTab === tab.key ? 'text-black' : 'text-white',
								buttonTabClassName
							)}
							onClick={() => handleTabClick(tab.key, index)}
						>
							{tab.label}
						</button>
					))}
				</div>
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
