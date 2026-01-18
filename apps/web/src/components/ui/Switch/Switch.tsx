'use client'

import { SwitchProps } from './Switch.types'

const Switch = (props: SwitchProps) => {
	const { checked, onChange, ...rest } = props

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		const check = e.target.checked
		onChange?.(check)
	}

	return (
		<label className="inline-flex items-center cursor-pointer">
			<input
				type="checkbox"
				className="sr-only peer"
				onChange={handleCheck}
				checked={checked}
				{...rest}
			/>
			<div className="relative w-11 h-6 rounded-full bg-gray-200  peer-checked:bg-black transition-colors duration-200 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-transform after:duration-200 peer-checked:after:translate-x-5" />
		</label>
	)
}

export default Switch
