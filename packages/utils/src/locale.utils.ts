/**
 * @description Get the label for a locale
 * @returns {string}
 * @param {string} locale
 */
export const getLocaleLabel = (locale: string): string => {
	switch (locale) {
		case 'es':
			return 'Español'
		case 'en':
			return 'English'
		default:
			return ''
	}
}
