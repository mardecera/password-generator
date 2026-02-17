import { CONSTANTS } from '@/constants/constants'
import { shuffleString } from '@/utils/generators.utils'

const { NUMBERS, UPPERCASE } = CONSTANTS
const LONG_NUMBERS = NUMBERS.repeat(10)

export const getPassport = (length: number) => {
	const charset = LONG_NUMBERS + UPPERCASE
	const shuffleCharset = shuffleString(charset)

	return Array.from({ length }, () =>
		shuffleCharset.charAt(Math.floor(Math.random() * shuffleCharset.length))
	).join('')
}
