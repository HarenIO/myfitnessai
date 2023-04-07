import Joi from 'joi'

const createWorkoutSchema = Joi.object({
  fitness_level: Joi.string().valid('Beginner', 'Intermediate', 'Advanced').required().messages({
    'string.base': 'Fitness level should be a string',
    'string.empty': 'Fitness level is required',
    'any.only': 'Fitness level should be Beginner, Intermediate, or Advanced',
    'any.required': 'Fitness level is required'
  }),
  primary_goal: Joi.string().valid('Weight loss', 'Muscle building', 'Strength', 'Endurance', 'Flexibility', 'Rehabilitation').required().messages({
    'string.base': 'Primary goal should be a string',
    'string.empty': 'Primary goal is required',
    'any.only': 'Primary goal should be Weight loss, Muscle building, Strength, Endurance, Flexibility, Rehabilitation',
    'any.required': 'Primary goalis required'
  }),
  workout_intensity: Joi.string().valid('Low', 'Moderate', 'High').required().messages({
    'string.base': 'Workout intensity should be a string',
    'string.empty': 'Workout intensity is required',
    'any.only': 'Workout intensity should be Low, Moderate, or High',
    'any.required': 'Workout intensity is required'
  }),
  workout_duration: Joi.string().valid('15-30 minutes', '30-60 minutes', '60+ minutes').required().messages({
    'string.base': 'Workout duration should be a string',
    'string.empty': 'Workout duration is required',
    'any.only': 'Workout duration should be 15-30 minutes, 30-60 minutes, or 60+ minutes',
    'any.required': 'Workout duration is required'
  }),
  available_equipment: Joi.string().valid('No equipment', 'Basic home equipment', 'Full gym').required().messages({
    'string.base': 'Available equipment should be a string',
    'string.empty': 'Available equipment is required',
    'any.only': 'Available equipment should be No equipment, Basic home equipment, or Full gym',
    'any.required': 'Available equipment is required'
  }),
  workout_environment: Joi.string().valid('Home', 'Gym', 'Outdoor').required().messages({
    'string.base': 'Workout environment should be a string',
    'string.empty': 'Workout environment is required',
    'any.only': 'Workout environment should be Home, Gym, or Outdoor',
    'any.required': 'Workout environment is required'
  }),
  warmup: Joi.string().valid('Yes', 'No').required().messages({
    'string.base': 'Warmup should be a string',
    'string.empty': 'Warmup is required',
    'any.only': 'Warmup should be Yes or No',
    'any.required': 'Warmup is required'
  }),
  cooldown: Joi.string().valid('Yes', 'No').required().messages({
    'string.base': 'Cooldown should be a string',
    'string.empty': 'Cooldown is required',
    'any.only': 'Cooldown should be Yes or No',
    'any.required': 'Cooldown is required'
  }),
  target_muscle: Joi.string().required().max(100).messages({
    'string.base': 'Target muscle should be a string',
    'string.empty': 'Target muscle is required',
    'any.required': 'Target muscle is required',
    'string.max': 'Additional information should have at most {#limit} characters'
  }),
  additional_information: Joi.string().required().max(250).allow('').messages({
    'string.base': 'Additional information should be a string',
    'any.required': 'Additional Information is required',
    'string.max': 'Additional information should have at most {#limit} characters'
  })
})

export { createWorkoutSchema }