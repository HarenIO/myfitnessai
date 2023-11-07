import React from 'react'
import styles from './WorkoutPage.module.css'
import WorkoutList from '../Components/WorkoutList'

function WorkoutPage({ workout, onBackToGenerator }) {


  return (
    <div className={styles.container}>
      <WorkoutList workout={workout} />
      <button onClick={onBackToGenerator} className={styles.backButton}>Back to Create Workout</button>
    </div>
  )
}

export default WorkoutPage