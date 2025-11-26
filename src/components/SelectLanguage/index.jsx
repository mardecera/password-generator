import { useContext, useEffect, useRef, useState } from "react"
import { LanguageContext } from "../../contexts"
import { useClickedOutside } from "../../hooks"
import { ArrowTopIcon } from "../../icons"
import styles from "./index.module.css"

const SelectLanguage = () => {
	const [language, handleLanguage] = useContext(LanguageContext)
	const [hidden, setHidden] = useState(true)
	const [rotateArrow, setRotateArrow] = useState("up")
	const selectRef = useRef(null)
	const outsideSelect = useClickedOutside(selectRef)

	useEffect(() => {
		setHidden(outsideSelect)
	}, [outsideSelect])

	useEffect(() => {
		setRotateArrow(hidden ? "down" : "up")
	}, [hidden])

	const handleOptions = (event) => {
		event.preventDefault()
		handleLanguage()
		setHidden(!hidden)
	}

	const handleSelect = () => setHidden(!hidden)

	return (
		<div>
			<div ref={selectRef} className={styles.select}>
				<button
					type="button"
					className={styles.placeholder}
					onClick={handleSelect}
				>
					<div>{language.name}</div>
					<ArrowTopIcon className={styles[rotateArrow]} />
				</button>
				<div
					className={styles.options}
					style={{ display: `${hidden ? "none" : "flex"}` }}
				>
					<button
						type="button"
						value="Spanish"
						onClick={handleOptions}
						className={language.name === "spanish" ? styles.active : ""}
					>
						Spanish
					</button>
					<button
						type="button"
						value="English"
						onClick={handleOptions}
						className={language.name === "english" ? styles.active : ""}
					>
						English
					</button>
				</div>
			</div>
		</div>
	)
}

export default SelectLanguage
