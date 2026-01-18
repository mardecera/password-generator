'use client'

import { twMerge } from 'tailwind-merge'
import { states, variants } from './ButtonLink.helpers'
import { ButtonLinkProps } from './ButtonLink.types'
import Link from 'next/link'

const ButtonLink = (props: ButtonLinkProps) => {
	const { className, children, icon, iconPosition = 'left', ...rest } = props
	const { iconClassName, childrenClassName, ...restTwo } = rest
	const { variant = 'solid', ...restThree } = restTwo

	return (
		<Link
			className={twMerge(
				'rounded-lg py-3 px-4 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-2 w-fit',
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
		</Link>
	)
}

export default ButtonLink
