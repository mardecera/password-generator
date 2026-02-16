import { Locale } from 'next-intl'
import { isLocale } from './type-guards.utils'

export const parseLocale = (locale: string): Locale | undefined => {
	if (!isLocale(locale)) return undefined
	return locale
}
