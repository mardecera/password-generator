import { HTMLAttributes } from 'react'

type Variant = 'solid' | 'outline' | 'ghost'
type IconPosition = 'left' | 'right'

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
	icon?: React.ReactNode
	iconPosition?: IconPosition
	variant?: Variant
	iconClassName?: string
	childrenClassName?: string
}
