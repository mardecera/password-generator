import { parseLocale } from './parsers.utils'

export const getLocale = (path: string) => {
	const newPath = path.split('/')[1]
	const posibleLocale = newPath === '' ? 'es' : newPath
	return parseLocale(posibleLocale)
}
