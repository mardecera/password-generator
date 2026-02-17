export type RandomPass = {
	length: number
	withNumbers: boolean
	withSpecialChars: boolean
	withUppercase: boolean
	withLowercase: boolean
}

export type ConfigStore = {
	configRandomPass: RandomPass | undefined
}

export type ConfigActions = {
	setConfigRandomPass: (randomPass: RandomPass) => void
	reset: () => void
}
