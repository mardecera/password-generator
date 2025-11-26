import { createContext, useState } from "react"
import { themes } from "../consts"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(themes.dark)

	const handleTheme = () => {
		const changeTheme = theme.name === "light" ? "dark" : "light"
		setTheme(themes[changeTheme])
	}

	return (
		<ThemeContext.Provider value={[theme, handleTheme]}>
			{children}
		</ThemeContext.Provider>
	)
}
