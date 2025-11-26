const getTypeCharacter = (labelCharacterLanguage) => {
	if (
		labelCharacterLanguage === "Incluye números" ||
		labelCharacterLanguage === "Includes numbers"
	)
		return "numbers"
	if (
		labelCharacterLanguage === "Incluye símbolos" ||
		labelCharacterLanguage === "Includes symbols"
	)
		return "symbols"
	if (
		labelCharacterLanguage === "Incluye mayúsculas" ||
		labelCharacterLanguage === "Includes uppercase"
	)
		return "uppercase"
	if (
		labelCharacterLanguage === "Incluye minúsculas" ||
		labelCharacterLanguage === "Includes lowercase"
	)
		return "lowercase"
}

export default getTypeCharacter
