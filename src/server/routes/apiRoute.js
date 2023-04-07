import express from 'express'
import { createWorkout } from '../controllers/workoutController.js'
const apiRoute = express.Router()

apiRoute.post('/create', createWorkout)

export default apiRoute