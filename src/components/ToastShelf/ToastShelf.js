import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';


function ToastShelf({toasts, isShown, handleDismiss}) {

  return (
		<ol className={styles.wrapper}>
			{toasts.map((toast) => (
				<li className={styles.toastWrapper} key={toast.id} id={toast.id}>
					<Toast
						variant={toast.variant}
						message={toast.message}
						isShown={isShown}
						handleDismiss={handleDismiss}
            id={toast.id}
					></Toast>
				</li>
			))}
		</ol>
  )
    
    
}
 


export default ToastShelf;
