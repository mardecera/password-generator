type Tab = {
	label: React.ReactNode
	content: React.ReactNode
	key: string
}

type TabStyles = {
	tabsClassName?: string
	contentClassName?: string
	buttonTabClassName?: string
}

export type TabsProps = {
	tabs: Tab[]
	className?: string
	children?: React.ReactNode
	activeTab?: string
	onTabClick?: (key: string) => void
	tabStyles?: TabStyles
}
