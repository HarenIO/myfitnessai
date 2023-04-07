import React from 'react'
import styles from './Loading.module.css'
import { SpinningCircles } from 'react-loading-icons'

function Loading() {
  return (
    <div className={styles.container}>
      <SpinningCircles />
      <h2>Generating your workout..</h2>
    </div>
  )
}

export default Loading