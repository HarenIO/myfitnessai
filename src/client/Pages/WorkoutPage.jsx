import React from 'react'
import styles from './WorkoutPage.module.css'
import WorkoutList from '../Components/WorkoutList'

function WorkoutPage({workout}) {


  return (
    <div className={styles.container}>
      <WorkoutList workout={workout}/>
    </div>
  )
}

export default WorkoutPage