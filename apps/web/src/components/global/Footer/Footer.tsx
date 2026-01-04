import { twMerge } from 'tailwind-merge'
import { FooterProps } from './Footer.types'
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher'

const Footer = (props: FooterProps) => {
	const { className } = props

	return (
		<footer className={twMerge('bg-gray-900', className)}>
			<div className="flex justify-center py-4 max-w-270 m-auto text-white">
				<LocaleSwitcher />
			</div>
		</footer>
	)
}

export default Footer
