import React from 'react'
import styles from './WorkoutPage.module.css'
import WorkoutList from '../Components/WorkoutList'

function WorkoutPage({ workout, onBackToGenerator }) {


  return (
    <div className={styles.container}>
      <WorkoutList workout={workout} />
      <h2>Not happy with the workout?</h2>
      <button onClick={onBackToGenerator} className={styles.backButton}>Create a new one</button>
    </div>
  )
}

export default WorkoutPage