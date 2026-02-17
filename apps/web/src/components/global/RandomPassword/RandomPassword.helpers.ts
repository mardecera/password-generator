import { CONSTANTS } from '@/constants/constants'
import { cryptoRandomInt, shuffleString } from '@/utils/generators.utils'
import { replaceCharAt } from '@/utils/string.utils'

const { NUMBERS, SPECIAL_CHARS, UPPERCASE, LOWERCASE } = CONSTANTS

export const getPassword = (
	length: number,
	withNumbers: boolean,
	withSpecialChars: boolean,
	withUppercase: boolean,
	withLowercase: boolean
) => {
	let password = ''
	let numbersCount = 0
	let specialCharsCount = 0

	const numbers = withNumbers ? NUMBERS : ''
	const specialChars = withSpecialChars ? SPECIAL_CHARS : ''
	const uppercase = withUppercase ? UPPERCASE : ''
	const lowercase = withLowercase ? LOWERCASE : ''
	const charset = numbers + specialChars + uppercase + lowercase
	const shuffleCharset = shuffleString(charset)

	for (let i = 0; i < length; i++) {
		const randomIndex = cryptoRandomInt(0, shuffleCharset.length - 1)
		const char = shuffleCharset.charAt(randomIndex)

		if (numbers.includes(char)) {
			numbersCount++
		} else if (specialChars.includes(char)) {
			specialCharsCount++
		}

		password += char
	}

	const hasNoNumbers = withNumbers && numbersCount === 0
	const hasNoSpecialChars = withSpecialChars && specialCharsCount === 0
	const hasSpecialChars = withSpecialChars && specialCharsCount !== 0
	const hasNumbers = withNumbers && numbersCount !== 0

	if (hasNoNumbers && !withSpecialChars) {
		const index = cryptoRandomInt(0, password.length - 1)
		const numberIndex = cryptoRandomInt(0, NUMBERS.length - 1)

		password = replaceCharAt(password, index, NUMBERS.charAt(numberIndex))

		return password
	}

	if (hasNoSpecialChars && !withNumbers) {
		const index = cryptoRandomInt(0, password.length - 1)
		const specialCharIndex = cryptoRandomInt(0, SPECIAL_CHARS.length - 1)
		const replacedChar = SPECIAL_CHARS.charAt(specialCharIndex)

		password = replaceCharAt(password, index, replacedChar)

		return password
	}

	if (hasNoNumbers && hasSpecialChars) {
		let index = cryptoRandomInt(0, password.length - 1)

		do {
			index = cryptoRandomInt(0, password.length - 1)
		} while (
			NUMBERS.includes(password[index]) ||
			SPECIAL_CHARS.includes(password[index])
		)

		const numberIndex = cryptoRandomInt(0, NUMBERS.length - 1)
		password = replaceCharAt(password, index, NUMBERS.charAt(numberIndex))

		return password
	}

	if (hasNoSpecialChars && hasNumbers) {
		let index = cryptoRandomInt(0, password.length - 1)

		do {
			index = cryptoRandomInt(0, password.length - 1)
		} while (
			SPECIAL_CHARS.includes(password[index]) ||
			NUMBERS.includes(password[index])
		)

		const specialCharIndex = cryptoRandomInt(0, SPECIAL_CHARS.length - 1)
		const replacedChar = SPECIAL_CHARS.charAt(specialCharIndex)

		password = replaceCharAt(password, index, replacedChar)

		return password
	}

	if (hasNoNumbers && hasNoSpecialChars) {
		const { a, b } = generateTwoIndex(password.length - 1, 0)

		password = replaceCharAt(password, a, NUMBERS.charAt(0))
		password = replaceCharAt(password, b, SPECIAL_CHARS.charAt(0))

		return password
	}

	return password
}

export const generateTwoIndex = (max: number, min: number) => {
	const range = max - min + 1
	const a = min + (crypto.getRandomValues(new Uint8Array(1))[0] % range)
	let b

	do {
		b = min + (crypto.getRandomValues(new Uint8Array(1))[0] % range)
	} while (b === a)

	return { a, b }
}
