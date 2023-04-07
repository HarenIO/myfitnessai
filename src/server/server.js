import dotenv from 'dotenv'
dotenv.config({path: '../../.env'})
import express from 'express'
import apiRoute from './routes/apiRoute.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({
  origin: ['https://myfitnessai.onrender.com', 'http://localhost:5173']
}))

app.use('/api', apiRoute)


app.listen(3000, () => console.log('Express server running on port 3000'))