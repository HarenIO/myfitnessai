import LandingPage from './Pages/LandingPage'
import WorkoutGenerator from './Pages/WorkoutGenerator'
import WorkoutPage from './Pages/WorkoutPage'
import Loading from './Pages/Loading'
import { useState, useEffect } from 'react'

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [showGenerator, setShowGenerator] = useState(true)
  const [workout, setWorkout] = useState([])


  useEffect(() => {

  }, [isLoading, showGenerator])

  const fetchWorkout = async (selectedOptions) => {
    const result = await fetch('http://localhost:5050/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedOptions)
    })
    const { workout } = await result.json()
    const parsedWorkout = await JSON.parse(workout)
    if (typeof parsedWorkout !== 'object') {
      console.log('Response not an object. Retrying.')
      fetchWorkout()
    }
    setIsLoading(false)
    setShowGenerator(false)
    return parsedWorkout
  }

  if (isLoading) {
    return (
      <div>
        <LandingPage />
        <Loading />
      </div>
    )
  }
  return (
    <div>
      <LandingPage />
      {showGenerator ? <WorkoutGenerator fetchWorkout={fetchWorkout} setIsLoading={setIsLoading} setWorkout={setWorkout} /> : <WorkoutPage workout={workout} />}
    </div>
  )
}

export default App
