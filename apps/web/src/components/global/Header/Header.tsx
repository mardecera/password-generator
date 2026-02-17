import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { HeaderProps } from './Header.types'

const Header = (props: HeaderProps) => {
	const { className } = props

	return (
		<header
			className={twMerge('p-4 pb-0 sticky top-0 transparent z-100', className)}
		>
			<div className="bg-gray-950 rounded-[10px] p-5 text-white">
				<Link href="/" className="font-black text-2xl sm:text-3xl">
					PASSFE
				</Link>
			</div>
		</header>
	)
}

export default Header
