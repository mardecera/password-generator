export type SelectOption = {
	label: string
	value: string
	node?: React.ReactNode
}

export type SelectProps = {
	value?: string
	options: SelectOption[]
	onChange?: (value: string) => void
	placeholder?: string
	className?: string
	optionClassName?: string
}
