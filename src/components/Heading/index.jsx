import { useContext } from "react"
import { LanguageContext, ThemeContext } from "../../contexts"
import HeadingElement from "./index.styled"

const Heading = () => {
	const [language] = useContext(LanguageContext)
	const [theme] = useContext(ThemeContext)

	return (
		<HeadingElement theme={theme}>
			<h1 className="title">{language.title}</h1>
			<h4 className="subTitle">{language.subTitle}</h4>
		</HeadingElement>
	)
}

export default Heading
