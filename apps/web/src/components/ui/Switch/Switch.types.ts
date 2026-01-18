import { Dispatch, InputHTMLAttributes, SetStateAction } from 'react'

export type SwitchProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'onChange'
> & {
	checked?: boolean
	onChange?: Dispatch<SetStateAction<boolean>>
}
