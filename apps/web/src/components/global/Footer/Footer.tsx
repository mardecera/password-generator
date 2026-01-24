import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

import { FooterProps } from './Footer.types'
import Separator from '@/components/ui/Separator/Separator'
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher'
import { getLegales } from './Footer.helpers'

import GithubSVG from 'src/assets/svg/github.svg'

const Footer = (props: FooterProps) => {
	const { className } = props
	const t = useTranslations('legal')

	const year = new Date().getFullYear()
	const legal = getLegales(t)

	return (
		<footer className={twMerge('bg-gray-950 rounded-t-2xl', className)}>
			<div className="flex flex-col gap-5 justify-center text-white wrapper px-6 xl:px-0 my-10">
				<div className="flex flex-row justify-between gap-3 items-center">
					<Link href="/" className="font-black text-3xl">
						PASSFE
					</Link>
					<LocaleSwitcher />
				</div>
				<Separator className="bg-gray-700" />
				<div className="flex flex-col sm:flex-row justify-between gap-6">
					<div className="space-y-5">
						<div className="flex flex-row gap-5 flex-wrap">
							{legal.map((item, index) => (
								<a
									key={index}
									className="text-sm whitespace-nowrap hover:underline font-semibold"
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									{item.label}
								</a>
							))}
						</div>
						<div className="text-sm font-semibold">
							{t.rich('copyright', {
								year,
								href: (chunks) => (
									<a
										href="https://mardecera.com"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline"
									>
										{chunks}
									</a>
								),
							})}
						</div>
					</div>
					<div>
						<a
							href="https://github.com/mardecera/password-generator"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GithubSVG className="w-8 h-8" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
