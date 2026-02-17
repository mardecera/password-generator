import { TabLabelProps } from './TabLabel.types'

const TabLabel = (props: TabLabelProps) => {
	const { icon, label } = props

	return (
		<span className="flex justify-center items-center gap-1">
			{icon ? icon : null}
			<span className="leading-[100%]">{label}</span>
		</span>
	)
}

export default TabLabel
