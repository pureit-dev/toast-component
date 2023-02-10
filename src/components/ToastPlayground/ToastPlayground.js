import React from "react"

import Button from "../Button"

import styles from "./ToastPlayground.module.css"
import ToastShelf from "../ToastShelf/ToastShelf"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
	const [message, setMessage] = React.useState("")
	const [variant, setVariant] = React.useState("notice")
	const [isShown, setIsShown] = React.useState(false)
	const [toasts, setToasts] = React.useState([])

	const handleDismiss = (id) => {
		setToasts((currentToasts) =>
			currentToasts.filter((toast) => toast.id !== id)
		)
	}

	const handleClick = (event) => {
		event.preventDefault()
		setToasts([...toasts, { id: Math.random(), message, variant }])
		setMessage("")
		setVariant("")
		setIsShown(true)
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>
			<ToastShelf
				toasts={toasts}
				isShown={isShown}
				handleDismiss={handleDismiss}
			/>
			<form className={styles.controlsWrapper} onSubmit={handleClick}>
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
