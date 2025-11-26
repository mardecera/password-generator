import { vars } from "../consts"

const getPositionInputRange = (passwordLength) => {
	const newMaxLongPassword = vars.maxLongPassword - vars.minLongPassword
	const newLongPassword = passwordLength - vars.minLongPassword
	return (100 * newLongPassword) / newMaxLongPassword
}

export default getPositionInputRange
