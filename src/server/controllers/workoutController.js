import dotenv from 'dotenv'
import fetch from 'node-fetch'
dotenv.config()
// dotenv.config({ path: './config/.env' })
import { systemConfig } from '../config/api.js'
import { createWorkoutSchema } from '../utils/validation.js'

const objectToString = (object) => {
  let string = ""
  for(let prop in object){
    if(prop.includes('_')){
      string += `${prop.replace('_', ' ')}: ${object[prop]}, `
    }else{
      string += `${prop}: ${object[prop]}, `
    }
  }
  return string
}

const createWorkout = async (req, res) => {
  try {
    const { error, value } = createWorkoutSchema.validate(req.body)
    if (error) {
      const errorMessage = error.details[0].message
      return res.status(400).json({ error: errorMessage })
    }
    const userMessage = objectToString(value)
    const requestBody = {
      model: 'gpt-4-1106-preview',
      messages: [
        systemConfig,
        { role: 'user', content: userMessage }
      ],
      max_tokens: 256,
      temperature: 0.4
    }
    
    const completionRequest = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify(requestBody)
    })
    const data = await completionRequest.json()
    if (data.error) {
      return res.status(404).json({ error: data.error})
    }

    return res.status(200).json({workout: data.choices[0].message.content})
  } catch (err) {
    return res.status(404).json({error: err})
  }
}


export { createWorkout }