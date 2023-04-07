import React, { useState } from 'react'
import styles from './WorkoutGenerator.module.css'
import Select from 'react-select'
import selectOptions from '../config/selectOptions'
import selectStyles from '../config/selectStyles'

function WorkoutGenerator({ setIsLoading, fetchWorkout, setWorkout, selectedOptions, setSelectedOptions }) {


  const handleClick = async () => {
    setIsLoading(true)
    const workout = await fetchWorkout(selectedOptions)
    setWorkout(workout)
  }

  const handleChange = (value, action) => {
    const fieldName = action.name;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [fieldName]: value.value,
    }));
  };

  const handleMultiChange = (value, action) => {
    const fieldName = action.name;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [fieldName]: value.map((item) => item.value).join(', '),
    }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Personalized Workout Plan</h1>
        <p className={styles.description}>Create your custom workout plan tailored to your preferences and goals using the latest AI technology.</p>
      </div>
      {/* should create a component for these */}
      <div className={styles.selectArea}>
        <div className={styles.selectCard}>
          <label htmlFor='fitness_level' className={styles.selectLabel}>Fitness level</label>
          <Select
            className={styles.select}
            defaultValue={selectedOptions.fitness_level}
            placeholder="Beginner"
            name="fitness_level"
            onChange={handleChange}
            options={selectOptions.levelOptions}
            styles={selectStyles}
            isSearchable={false}
          />

        </div>
        <div className={styles.selectCard}>
          <label htmlFor='primary_goal' className={styles.selectLabel}>Primary Goal</label>
          <Select
            className={styles.select}
            defaultValue={selectedOptions.primary_goal}
            placeholder="Muscle Building"
            name="primary_goal"
            onChange={handleChange}
            options={selectOptions.goalOptions}
            styles={selectStyles}
            isSearchable={false}
          />
        </div>
        <div className={styles.selectCard}>
          <label htmlFor='workout_intensity' className={styles.selectLabel}>Workout Intensity</label>
          <Select
            className={styles.select}
            defaultValue={selectedOptions.workout_intensity}
            placeholder="Moderate"
            name="workout_intensity"
            onChange={handleChange}
            options={selectOptions.intensityOptions}
            styles={selectStyles}
            isSearchable={false}
          />
        </div>
        <div className={styles.selectCard}>
          <label htmlFor='target_muscle' className={styles.selectLabel}>Target Muscles</label>
          <Select
            className={styles.select}
            defaultValue={selectedOptions.target_muscle}
            placeholder="Full body"
            name="target_muscle"
            onChange={handleMultiChange}
            options={selectOptions.targetMuscleOptions}
            isMulti
            styles={selectStyles}
            isSearchable={false}
          />
        </div>
        <div className={styles.selectCard}>
          <label htmlFor='available_equipment' className={styles.selectLabel}>Available Equipment</label>
          <Select
            className={styles.select}
            defaultValue={selectedOptions.available_equipment}
            placeholder="Full gym"
            name="available_equipment"
            onChange={handleChange}
            options={selectOptions.equipmentOptions}
            styles={selectStyles}
            isSearchable={false}
          />
        </div>
        <div className={styles.selectCard}>
          <label htmlFor='workout_environment' className={styles.selectLabel}>Workout Environment</label>
          <Select
            className={styles.select}
            defaultValue={selectedOptions.workout_environment}
            placeholder="Gym"
            name="workout_environment"
            onChange={handleChange}
            options={selectOptions.environmentOptions}
            styles={selectStyles}
            isSearchable={false}
          />
        </div>
        <div className={styles.selectCard}>
          <label htmlFor='warmup' className={styles.selectLabel}>Warmup</label>
          <Select
            className={styles.select}
            defaultValue={selectedOptions.warmup}
            placeholder="Yes"
            name="warmup"
            onChange={handleChange}
            options={selectOptions.warmupOptions}
            styles={selectStyles}
            isSearchable={false}
          />
        </div>
        <div className={styles.selectCard}>
          <label htmlFor='cooldown' className={styles.selectLabel}>Cooldown</label>
          <Select
            className={styles.select}
            defaultValue={selectedOptions.cooldown}
            placeholder="Yes"
            name="cooldown"
            onChange={handleChange}
            options={selectOptions.cooldownOptions}
            styles={selectStyles}
            isSearchable={false}
          />
        </div>
        <div className={styles.selectCard}>
          <label htmlFor='workout_duration' className={styles.selectLabel}>Workout Duration</label>
          <Select
            className={styles.select}
            defaultValue={selectedOptions.workout_duration}
            placeholder="Medium"
            name="workout_duration"
            onChange={handleChange}
            options={selectOptions.durationOptions}
            styles={selectStyles}
            isSearchable={false}
          />
        </div>
        <div className={styles.selectCard}>
          <label htmlFor='additional_information' className={styles.selectLabel}>Additional Information</label>
          <input type="text" name="additional_information" placeholder="Soreness, Injuries..." className={styles.additionalInfo} />
        </div>
      </div>
      <button className={styles.createButton} onClick={handleClick}>Create Workout</button>
    </div >

  );

}

export default WorkoutGenerator