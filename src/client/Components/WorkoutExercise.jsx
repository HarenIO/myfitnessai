import React from 'react'
import styles from './WorkoutExercise.module.css'

function WorkoutExercise({ exercise }) {
  return (
    <div className={styles.exerciseContainer}>
      <p className={styles.exercise}>{Object.keys(exercise)}</p> 
      <p className={styles.reps}>{Object.values(exercise)}</p>
    </div>
  )
}

export default WorkoutExercise