import { Link } from "react-router-dom"
import { notFound404 } from "../../assets"
import styles from "./index.module.css"

const NotFound = () => {
	return (
		<div className={styles.container}>
			<div className={styles.contain}>
				<img src={notFound404} alt="404" />
				<p>Esta pagina no existe 🥲 </p>
				<Link className={styles.goToHome} to="/" aria-label={"Go to Home"}>
					<span className="icon-arrow-left"></span>
					<p>Go to Home</p>
				</Link>
			</div>
		</div>
	)
}

export default NotFound
