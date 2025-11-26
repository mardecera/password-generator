import { useContext, useId } from "react"
import { LanguageContext, ThemeContext } from "../../contexts"
import { getPositionInputRange, getTypeCharacter } from "../../utils"
import styles from "./index.module.css"
import { Item, SettingsContainer } from "./index.styled"

const CreateSettingsItems = ({ config, handleClick, items }) => {
	const [theme] = useContext(ThemeContext)
	const id = useId()

	return items.map((item) => {
		const typeCharacter = getTypeCharacter(item)

		return (
			<Item
				key={id}
				onClick={() => handleClick(typeCharacter, !config[typeCharacter])}
				theme={theme}
			>
				<span
					className={`icon-check ${config[typeCharacter] ? styles.active : ""}`}
				></span>
				<p className={styles.itemLabel}>{item}</p>
			</Item>
		)
	})
}

const Settings = ({ config, handleCharacters, handlePass, inputRangeRef }) => {
	const [theme] = useContext(ThemeContext)
	const [language] = useContext(LanguageContext)
	const percent = getPositionInputRange(config.passwordLength)
	const linearGradient = `linear-gradient(90deg, #07bd3a`
	const background = `${linearGradient} ${percent}%, #d8d8d88f ${percent}%)`

	return (
		<SettingsContainer theme={theme}>
			<div className={styles.typesCharacters}>
				<CreateSettingsItems
					config={config}
					handleClick={handleCharacters}
					items={language.charactersPassword.labels}
				/>
			</div>
			<div
				className={styles.longCharacters}
				style={{ borderTop: theme.settingsBorderTop }}
			>
				<p className="longLabel">{language.longPassword.label}</p>
				<div className={styles.longValue}>
					<label htmlFor="rangeCharacters">
						<input
							id="rangeCharacters"
							style={{ background: background }}
							type="range"
							min={8}
							max={32}
							defaultValue={24}
							onChange={handlePass}
							ref={inputRangeRef}
						/>
						<p>{config.passwordLength}</p>
					</label>
				</div>
			</div>
		</SettingsContainer>
	)
}

export default Settings
