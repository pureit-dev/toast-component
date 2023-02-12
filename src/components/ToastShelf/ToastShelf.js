import React from "react"
import { ToastContext } from "../ToastProvider/ToastProvider"
import Toast from "../Toast"
import styles from "./ToastShelf.module.css"

function ToastShelf() {
	const { toasts } = React.useContext(ToastContext)
	
	return (
		<ol className={styles.wrapper}>
			{toasts.map((toast) => (
				
				<li
					className={styles.toastWrapper}
					key={toast.id}
					id={toast.id}
				>
					<Toast
						variant={toast.variant}
						message={toast.message}
						id={toast.id}
					></Toast>
				</li>
			))}
		</ol>
	)
}

export default ToastShelf
