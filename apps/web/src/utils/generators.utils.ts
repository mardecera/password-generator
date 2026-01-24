/**
 * Shuffles a string using a cryptographically secure RNG.
 * Implements Fisher–Yates algorithm.
 */
export function shuffleString(input: string): string {
	const chars = input.split('')

	for (let i = chars.length - 1; i > 0; i--) {
		const j = cryptoRandomInt(0, i)
		;[chars[i], chars[j]] = [chars[j], chars[i]]
	}

	return chars.join('')
}

/**
 * Secure random integer between min and max (inclusive).
 */
export function cryptoRandomInt(min: number, max: number): number {
	const range = max - min + 1
	const maxRange = 256
	const randomByte = crypto.getRandomValues(new Uint8Array(1))[0]

	return min + Math.floor((randomByte / maxRange) * range)
}
