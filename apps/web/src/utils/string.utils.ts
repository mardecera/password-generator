/**
 * @description Replace a character in a string
 * @param str
 * @param index
 * @param replacement
 * @returns
 */

export const replaceCharAt = (
	str: string,
	index: number,
	replacement: string
) => {
	return str.substring(0, index) + replacement + str.substring(index + 1)
}
