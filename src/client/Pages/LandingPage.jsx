import React from 'react'
import styles from './LandingPage.module.css'

function LandingPage() {

  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight - window.innerHeight,
      behavior: 'smooth',
    });
    }
  return (
      <div className={styles.container}>
        <h1 className={styles.header}>MyFitnessAI<span className={styles.beta}>Beta</span></h1>
        <section className={styles.mainInfo}>
          <h2>Unlock Your True Fitness Potential</h2>
          <p>Revolutionize your fitness journey with MyFitnessAI! Our cutting-edge AI technology creates a personalized workout tailored to your goals and preferences. Say goodbye to generic routines and experience the power of adaptive, AI-generated workouts designed just for you.</p>
          <button onClick={handleClick}>Get Started</button>
        </section>
      </div>
    )
  }

  export default LandingPage
