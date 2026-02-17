'use client'

import { getLocaleLabel } from '@passfe/utils'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { Locale } from 'next-intl'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

import Select from '@/components/ui/Select/Select'
import { routing } from '@/i18n/routing'

import { LocaleSwitcherProps } from './LocaleSwitcher.types'

const LocaleSwitcher = (props: LocaleSwitcherProps) => {
	const { className } = props

	const params = useParams()
	const pathname = usePathname()
	const locales = routing.locales
	const activeLocale = (params.locale as string) || routing.defaultLocale

	const basePath = useMemo(() => {
		if (!pathname) return '/'
		const segments = pathname.split('/').filter(Boolean)
		if (segments.length === 0) return '/'

		const maybeLocale = segments[0] as Locale
		if (locales.includes(maybeLocale)) {
			const rest = segments.slice(1).join('/')
			return rest ? `/${rest}` : '/'
		}
		return pathname
	}, [pathname])

	const options = locales.map((locale) => {
		const isActive = activeLocale === locale
		const isSameLocale = locale === routing.defaultLocale
		const href = isSameLocale ? basePath : `/${locale}${basePath}`
		const label = getLocaleLabel(locale)

		return {
			label,
			node: (
				<Link
					href={href}
					className={twMerge(
						'flex w-full px-3 py-2 hover:bg-gray-200 text-[14px]',
						isActive && 'font-bold'
					)}
				>
					{label}
				</Link>
			),
			value: locale,
		}
	})

	return (
		<div className={twMerge(className)}>
			<Select value={activeLocale} options={options} />
		</div>
	)
}

export default LocaleSwitcher
