import React from 'react'
import styles from './Loading.module.css'
import { SpinningCircles } from 'react-loading-icons'

function Loading({ loadingMessage }) {

  const [showSpinner, setShowSpinner] = React.useState(true)

  React.useEffect(() => {
    if(loadingMessage == 'Something went wrong. Please try again!') {
      setShowSpinner(false)
    }
  }, [loadingMessage])

  return (
    
    <div className={styles.container}>
      {showSpinner ? <SpinningCircles fill="#FFF" /> : null}
      <h2 className="loadingTitle">{loadingMessage}</h2>
    </div>
  )
}

export default Loading
