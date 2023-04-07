import LandingPage from './Pages/LandingPage'
import WorkoutGenerator from './Pages/WorkoutGenerator'
import WorkoutPage from './Pages/WorkoutPage'
import Loading from './Pages/Loading'
import { useState, useEffect } from 'react'

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('Creating your workout..')
  const [showGenerator, setShowGenerator] = useState(true)
  const [workout, setWorkout] = useState([])
  const [selectedOptions, setSelectedOptions] = useState({
    fitness_level: 'Beginner',
    primary_goal: 'Muscle building',
    workout_intensity: 'Moderate',
    workout_duration: '30-60 minutes',
    available_equipment: 'Full gym',
    workout_environment: 'Gym',
    warmup: 'Yes',
    cooldown: 'Yes',
    target_muscle: 'Full body',
    additional_information: ''
  })

  useEffect(() => {

  }, [isLoading, showGenerator])

  const fetchWorkout = async (selectedOptions, retries = 3) => {
    if(retries <= 0){
      throw new Error('Failed to contact API after multiple retries.')
    }
    const result = await fetch('https://myfitnessai-api.onrender.com/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedOptions)
    })
    const { workout } = await result.json()
    const parsedWorkout = await JSON.parse(workout)
    if (typeof parsedWorkout !== 'object') {
      setLoadingMessage('Something went wrong. Retrying..')
      return fetchWorkout(selectedOptions, retries - 1)
    }
    setIsLoading(false)
    setShowGenerator(false)
    return parsedWorkout
  }

  if (isLoading) {
    return (
      <div>
        <LandingPage />
        <Loading loadingMessage={loadingMessage}/>
      </div>
    )
  }
  return (
    <div>
      <LandingPage />
      {showGenerator ? <WorkoutGenerator selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} fetchWorkout={fetchWorkout} setIsLoading={setIsLoading} setWorkout={setWorkout} /> : <WorkoutPage workout={workout} />}
    </div>
  )
}

export default App
