import { CONSTANTS } from '@/constants/constants'

const { NUMBERS } = CONSTANTS

export const getRandomPIN = (length: number) => {
	return Array.from({ length }, () =>
		NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length))
	)
}
