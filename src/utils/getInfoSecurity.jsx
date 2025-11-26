import { configDefault } from "../consts"

const getInfoSecurity = (config) => {
	const passwordLength = +config.passwordLength
	const actives = config.actives()
	let key = ""

	switch (actives) {
		case 1:
			if (passwordLength < 16) {
				key = "bad"
			} else if (passwordLength >= 16 && passwordLength <= 18) {
				key = "medium"
			} else {
				key = "good"
			}
			break
		case 2:
			if (passwordLength < 10) {
				key = "bad"
			} else if (passwordLength >= 10 && passwordLength <= 14) {
				key = "medium"
			} else {
				key = "good"
			}
			break
		case 3:
			if (passwordLength < 9) {
				key = "bad"
			} else if (passwordLength >= 9 && passwordLength <= 13) {
				key = "medium"
			} else {
				key = "good"
			}
			break
		case 4:
			if (passwordLength < 9) {
				key = "bad"
			} else if (passwordLength >= 9 && passwordLength <= 12) {
				key = "medium"
			} else {
				key = "good"
			}
			break
	}

	return configDefault.infoSecurity[key]
}

export default getInfoSecurity
