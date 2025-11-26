import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, NotFound } from "../views"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
