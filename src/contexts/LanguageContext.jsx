import { createContext, useState } from "react"
import { languages } from "../consts"

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(languages.english)

	const handleLanguage = () => {
		const newLanguage = language.name === "spanish" ? "english" : "spanish"
		setLanguage(languages[newLanguage])
	}

	return (
		<LanguageContext.Provider value={[language, handleLanguage]}>
			{children}
		</LanguageContext.Provider>
	)
}
