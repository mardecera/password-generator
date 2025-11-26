import { useEffect, useState } from "react"

const useClickedOutside = (ref) => {
	const [state, setState] = useState(true)
	useEffect(() => {
		function clickedOutside(event) {
			setState(!ref.current.contains(event.target))
		}

		document.addEventListener("click", clickedOutside)

		return () => document.removeEventListener("click", clickedOutside)
	}, [ref])

	return state
}

export default useClickedOutside
