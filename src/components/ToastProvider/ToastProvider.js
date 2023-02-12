import React from "react"

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([])

	function createToast(message, variant) {
   
		const nextToasts = [...toasts, { id: Math.random(), message, variant }]
		setToasts(nextToasts)
	}

	const handleDismiss = (id) => {
		setToasts((currentToasts) =>
			currentToasts.filter((toast) => toast.id !== id)
		)
	}

	return (
		<ToastContext.Provider value={{ toasts, createToast, handleDismiss }}>
			{children}
		</ToastContext.Provider>
	)
}

export default ToastProvider
