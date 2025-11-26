import { useContext, useEffect, useRef, useState } from "react"
import {
	Actions,
	Heading,
	Menu,
	Notifications,
	Result,
	Settings,
} from "../../components"
import { configDefault } from "../../consts"
import { LanguageContext, ThemeContext } from "../../contexts"
import { getPassword } from "../../utils"
import HomeElement from "./index.styled"

const Home = () => {
	const [theme] = useContext(ThemeContext)
	const [language] = useContext(LanguageContext)
	const [notifications, setNotifications] = useState([])
	const [config, setConfig] = useState(configDefault.app)
	const [password, setPassword] = useState(getPassword(configDefault.app))
	const inputRangeRef = useRef(null)

	useEffect(() => {
		setPassword(getPassword({ ...config }))
	}, [config])

	const changePassword = () => setPassword(getPassword({ ...config }))

	const changePasswordLength = () =>
		setConfig({
			...config,
			...{ passwordLength: inputRangeRef.current.value },
		})

	const changeIncludesCharacters = (type, activeState) => {
		const newConfig = { ...config, ...{ [type]: activeState } }

		if (config.actives() > 1) setConfig(newConfig)
		else {
			if (activeState) setConfig(newConfig)
			else {
				handleNotifications(language.charactersPassword.notification)
			}
		}
	}

	const handleNotifications = (currentMessage) => {
		const id = new Date()
		const notification = {
			id,
			isCompleted: false,
			message: currentMessage,
		}
		setNotifications([...notifications, notification])
	}

	return (
		<HomeElement theme={theme}>
			<div className="app">
				<Menu />
				<Heading />
				<Result
					password={password}
					config={config}
					changePassword={changePassword}
					handleNotifications={handleNotifications}
				/>
				<Settings
					config={config}
					handleCharacters={changeIncludesCharacters}
					handlePass={changePasswordLength}
					inputRangeRef={inputRangeRef}
				/>
				<Actions
					password={password}
					changePassword={changePassword}
					handleNotifications={handleNotifications}
				/>
				<Notifications notifications={notifications} />
			</div>
		</HomeElement>
	)
}

export default Home
