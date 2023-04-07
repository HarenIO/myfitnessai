import React from 'react'
import WorkoutWarmup from './WorkoutWarmup'
import WorkoutExercise from './WorkoutExercise'
import WorkoutCooldown from './WorkoutCooldown'
import styles from './WorkoutList.module.css'

function WorkoutList({ workout }) {


  //flatmap tar bort de nestade arraysen
  const renderedWarmup = workout.flatMap((category) => {
    if (category.warmup) {
      return category.warmup.map((exercise) => {
        return <WorkoutWarmup exercise={exercise} key={Object.keys(exercise)} />
      })
    }
    return []
  })

  const renderedWorkout = workout.flatMap((category) => {
    if (category.workout) {
      return category.workout.map((exercise) => {
        return <WorkoutExercise exercise={exercise} key={Object.keys(exercise)} />
      })
    }
    return []
  })

  const renderedCooldown = workout.flatMap((category) => {
    if (category.cooldown) {
      return category.cooldown.map((exercise) => {
        return <WorkoutCooldown exercise={exercise} key={Object.keys(exercise)} />
      })
    }
    return []
  })

  return (
    <div className={styles.workoutList}>
      {renderedWarmup.length > 0 && <h2>Warmup</h2>}
      {renderedWarmup}
      {renderedWorkout.length > 0 && <h2>Workout</h2>}
      {renderedWorkout}
      {renderedCooldown.length > 0 && <h2>Cooldown</h2>}
      {renderedCooldown}
    </div>
  )
}

export default WorkoutList
