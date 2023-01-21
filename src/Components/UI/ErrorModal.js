import React from 'react'
import Card from './Card'
import Button from './Button'
import styles from './ErrorModal.module.css'

function ErrorModal(props) {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  )
}

export default ErrorModal
