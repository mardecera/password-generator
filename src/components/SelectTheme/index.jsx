import { useContext, useState } from "react"
import { ThemeContext } from "../../contexts"
import styles from "./index.module.css"
import SelectThemeContainer from "./index.styled"

const SelectTheme = () => {
	const [switchPosition, setSwitchPosition] = useState("left")
	const [theme, handleTheme] = useContext(ThemeContext)

	const handleSwitch = () => {
		setSwitchPosition(switchPosition === "left" ? "right" : "left")
		handleTheme()
	}

	return (
		<SelectThemeContainer onClick={handleSwitch} theme={theme}>
			<div className={`switch ${styles[switchPosition]}`}></div>
		</SelectThemeContainer>
	)
}

export default SelectTheme
