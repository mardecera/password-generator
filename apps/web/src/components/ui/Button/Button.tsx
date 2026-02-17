'use client'

import { twMerge } from 'tailwind-merge'

import { states, variants } from './Button.helpers'
import { ButtonProps } from './Button.types'

const Button = (props: ButtonProps) => {
	const { className, children, icon, iconPosition = 'left', ...rest } = props
	const { iconClassName, childrenClassName, ...restTwo } = rest
	const { variant = 'solid', ...restThree } = restTwo

	return (
		<button
			className={twMerge(
				'rounded-lg py-3 px-4 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-2',
				variants[variant],
				states[variant],
				className
			)}
			{...restThree}
		>
			<span className={iconClassName}>
				{icon && iconPosition === 'left' && icon}
			</span>
			<span className={childrenClassName}>{children}</span>
			<span className={iconClassName}>
				{icon && iconPosition === 'right' && icon}
			</span>
		</button>
	)
}

export default Button
