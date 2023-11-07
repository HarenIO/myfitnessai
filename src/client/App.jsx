import LandingPage from './Pages/LandingPage'
import WorkoutGenerator from './Pages/WorkoutGenerator'
import WorkoutPage from './Pages/WorkoutPage'
import Loading from './Pages/Loading'
import { useState, useEffect } from 'react'

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('Creating your workout')
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

  const handleBackToGenerator = () => {
    setShowGenerator(true);
  };

  useEffect(() => {

  }, [isLoading, showGenerator])

  const fetchWorkout = async (selectedOptions, retries = 3) => {
    try {
      const response = await fetch('http://localhost:3000/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedOptions)
      });
  
      if (!response.ok) {
        if (retries > 0 && (response.status === 400 || response.status >= 500)) {
          console.log('Something went wrong. Retrying..');
          setLoadingMessage('Something went wrong. Retrying..');
          await new Promise(resolve => setTimeout(resolve, 1000));
          return await fetchWorkout(selectedOptions, retries - 1);
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const { workout } = await response.json();
      const parsedWorkout = JSON.parse(workout);
      setIsLoading(false);
      setShowGenerator(false);
      return parsedWorkout;
  
    } catch (error) {
      console.error('There was an error!', error);
      if (retries > 0) {
        console.log(`Retrying`);
        setLoadingMessage(`Something went wrong. Retrying..`);
        return await fetchWorkout(selectedOptions, retries - 1);
      } else {
        console.error(`Failed after multiple retries: ${error}`);
        setLoadingMessage('Something went wrong. Please try again!')
      }
    }
  };
  
  

  if (isLoading) {
    return (
      <div>
        <LandingPage />
        <Loading loadingMessage={loadingMessage} />
      </div>
    )
  }
  return (
    <div>
      <LandingPage />
      {showGenerator ? <WorkoutGenerator selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} fetchWorkout={fetchWorkout} setIsLoading={setIsLoading} setWorkout={setWorkout} /> : <WorkoutPage workout={workout} onBackToGenerator={handleBackToGenerator}/>}
    </div>
  )
}

export default App
