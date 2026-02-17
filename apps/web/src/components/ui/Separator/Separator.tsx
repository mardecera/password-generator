import { twMerge } from 'tailwind-merge'

import { SeparatorProps } from './Separator.types'

const Separator = (props: SeparatorProps) => {
	const { className, orientation = 'horizontal' } = props

	const orientationClass = {
		horizontal: 'h-px w-full',
		vertical: 'h-full w-px',
	}

	return (
		<div
			className={twMerge(
				' bg-gray-200',
				orientationClass[orientation],
				className
			)}
		/>
	)
}

export default Separator
