import { vars } from "../consts"

const getPassword = (config) => {
	let password = ""
	const allCharacters = [
		...(config.numbers ? vars.numbers : ""),
		...(config.symbols ? vars.symbols : ""),
		...(config.uppercase ? vars.uppercase : ""),
		...(config.lowercase ? vars.lowercase : ""),
	]
	const allCharactersLength = allCharacters.length - 1

	if (allCharactersLength > 0) {
		const passwordLength = config.passwordLength

		for (let i = 0; i < passwordLength; i++) {
			const position = Math.round(Math.random() * allCharactersLength)
			password = `${password}${allCharacters[position]}`
		}
	}
	return password
}

export default getPassword
