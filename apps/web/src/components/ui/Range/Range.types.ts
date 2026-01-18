import { InputHTMLAttributes } from 'react'

type Exclude = 'onChange' | 'min' | 'max' | 'value'

export type RangeProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	Exclude
> & {
	onChange?: (value: number) => void
	railClassName?: string
	thumbClassName?: string
	containerClassName?: string
	fillClassName?: string
	min: number
	max: number
	value: number
}
