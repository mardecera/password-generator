import { twMerge } from 'tailwind-merge'
import { HeaderProps } from './Header.types'

const Header = (props: HeaderProps) => {
	const { className } = props

	return (
		<header className={twMerge('p-4 pb-0 sticky top-0 bg-gray-950', className)}>
			<div className="bg-gray-900 rounded-sm p-2 text-white">Header</div>
		</header>
	)
}

export default Header
