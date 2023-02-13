import React from "react"
import { ToastContext } from "../ToastProvider/ToastProvider"
import Button from "../Button"

import styles from "./ToastPlayground.module.css"
import ToastShelf from "../ToastShelf/ToastShelf"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
	const [message, setMessage] = React.useState("")
	const [variant, setVariant] = React.useState("notice")

	const { createToast } = React.useContext(ToastContext)

	function handleCreateToast(event) {
		event.preventDefault()
		createToast(message, variant)
		setMessage("")
		setVariant("notice")
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>
			<ToastShelf />
			<form
				className={styles.controlsWrapper}
				onSubmit={handleCreateToast}
			>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: "baseline" }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={(event) => {
								setMessage(event.target.value)
							}}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					{VARIANT_OPTIONS.map((option) => (
						<div
							key={option}
							className={`${styles.inputWrapper} ${styles.radioWrapper}`}
						>
							<label htmlFor={`variant-${option}`}>
								<input
									id={`variant-${option}`}
									type="radio"
									name="variant"
									value={option}
									onChange={(event) => {
										setVariant(event.target.value)
									}}
									checked={option === variant}
								/>
								{option}
							</label>
						</div>
					))}
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div
						className={`${styles.inputWrapper} ${styles.radioWrapper}`}
					>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ToastPlayground
