type Tab = {
	label: React.ReactNode
	content: React.ReactNode
	key: string
}

export type TabsProps = {
	tabs: Tab[]
	className?: string
	tabsClassName?: string
	contentClassName?: string
	children?: React.ReactNode
	activeTab?: string
	onTabClick?: (key: string) => void
}
