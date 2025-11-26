import { useContext } from "react"
import { LanguageContext } from "../../contexts"
import { copyToClipboard } from "../../utils"
import styles from "./index.module.css"

const Actions = ({ password, changePassword, handleNotifications }) => {
	const [language] = useContext(LanguageContext)
	return (
		<div className={styles.actions}>
			<button
				type="button"
				onClick={() => changePassword()}
				className={`${styles.btn} ${styles.actionRefresh}`}
			>
				{language.refreshPassword.label}
				<span className={"icon-rotate"}></span>
			</button>
			<button
				type="button"
				onClick={() => {
					copyToClipboard(password)
					handleNotifications(language.copyPassword.notification)
				}}
				className={`${styles.btn} ${styles.actionCopy}`}
			>
				{language.copyPassword.label}
				<span className={"icon-copy"}></span>
			</button>
		</div>
	)
}

export default Actions
