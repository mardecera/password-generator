import { Locale } from 'next-intl'

import { routing } from '@/i18n/routing'

export const isLocale = (locale: string): locale is Locale => {
	const newPath = locale.split('/')[1]
	const possibleLocale = newPath === '' ? 'es' : newPath

	return (
		typeof possibleLocale === 'string' &&
		(routing.locales as readonly string[]).includes(possibleLocale)
	)
}

export const hasLocalePrefix = (path: string) => {
	return routing.locales.some(
		(locale) => path === `/${locale}` || path.startsWith(`/${locale}/`)
	)
}
