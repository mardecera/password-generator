import React from "react"
import ReactDOM from "react-dom/client"
import { LanguageProvider, ThemeProvider } from "./contexts"
import App from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider>
			<LanguageProvider>
				<App />
			</LanguageProvider>
		</ThemeProvider>
	</React.StrictMode>,
)
