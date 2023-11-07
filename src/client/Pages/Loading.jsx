import React, { useEffect, useState } from 'react'
import styles from './Loading.module.css'
import { SpinningCircles } from 'react-loading-icons'

function Loading({ loadingMessage }) {

  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(dots => dots.length < 3 ? dots + '.' : '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <SpinningCircles fill="#FFF" />
      <h2 className="loadingTitle">{loadingMessage}{dots}</h2>
    </div>
  )
}

export default Loading
