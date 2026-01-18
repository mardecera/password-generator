import { LinkProps } from 'next/link'

type Variant = 'solid' | 'outline' | 'ghost'
type IconPosition = 'left' | 'right'

export type ButtonLinkProps = LinkProps & {
	icon?: React.ReactNode
	iconPosition?: IconPosition
	variant?: Variant
	iconClassName?: string
	childrenClassName?: string
	className?: string
	children?: React.ReactNode
}
