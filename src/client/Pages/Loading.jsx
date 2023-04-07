import React from 'react'
import styles from './Loading.module.css'
import { SpinningCircles } from 'react-loading-icons'

function Loading({loadingMessage}) {
  return (
    <div className={styles.container}>
      <SpinningCircles />
      <h2>{loadingMessage}</h2>
    </div>
  )
}

export default Loading