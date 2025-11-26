import { useContext, useRef } from "react"
import { LanguageContext, ThemeContext } from "../../contexts"
import { copyToClipboard, getInfoSecurity } from "../../utils"
import styles from "./index.module.css"

const Result = ({ password, config, changePassword, handleNotifications }) => {
	const [theme] = useContext(ThemeContext)
	const [language] = useContext(LanguageContext)
	const refreshButtonRef = useRef(null)
	const copyButtonRef = useRef(null)
	const infoSecurity = getInfoSecurity(config)
	const { icon, type, color, backColor, percent } = infoSecurity

	const addTempFunctionality = (ref, className, time) => {
		ref.current.classList.add(className)
		setTimeout(() => ref.current.classList.remove(className), time)
	}

	return (
		<div>
			<div className={styles.result}>
				<div
					className={styles.container}
					style={{
						backgroundColor: theme.quinaryColor,
						boxShadow: theme.shadowBox,
					}}
				>
					<span
						className={styles.showPassword}
						title={password}
						style={{ color: theme.tertiaryColor }}
					>
						{password}
					</span>
					<div className={styles.resultActions}>
						<button
							type="button"
							ref={refreshButtonRef}
							className={`${styles.actionReset}`}
							onClick={() => {
								changePassword()
								addTempFunctionality(refreshButtonRef, "rotate", 500)
							}}
							title={language.refreshPassword.title}
						>
							<span
								className={"icon-rotate"}
								style={{ color: theme.tertiaryColor }}
							></span>
						</button>
						<button
							type="button"
							ref={copyButtonRef}
							className={styles.actionCopy}
							onClick={() => {
								copyToClipboard(password)
								handleNotifications(language.copyPassword.notification)
								addTempFunctionality(copyButtonRef, "zoom", 500)
							}}
							title={language.copyPassword.title}
						>
							<span
								className={"icon-copy"}
								style={{ color: theme.tertiaryColor }}
							></span>
						</button>
					</div>
				</div>
				<div
					className={styles.resultSecurityBar}
					style={{
						backgroundColor: backColor,
						transition: "background-color .5s ease-out",
					}}
				>
					<div
						style={{
							width: `${percent}%`,
							backgroundColor: color,
							transition: "width .5s ease-out",
						}}
					></div>
				</div>
				<div className={styles.resultSecurity} style={{ color: color }}>
					<span className={`icon-shield${icon}`}></span>
					<p className="securityMessage">
						{language.levelPassword.labels[type]}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Result
