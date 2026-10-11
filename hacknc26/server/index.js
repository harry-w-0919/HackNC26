import express from 'express'
import dotenv from 'dotenv'

dotenv.config({ path: new URL('./.env', import.meta.url) })

const app = express()
const model = 'gemini-3.5-flash'

app.use(express.json({ limit: '32kb' }))

app.post(`/api/gemini/${model}`, async (req, res) => {
  try {
    const { language, topic, persona } = req.body
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{
              text: `You are LocalChat, a friendly language practice partner that is professional in ${language}. 
              Help the user who speaks English practice natural everyday conversations, 
              focusing on the topic of ${topic}. 
              Use simple language, be the person that have characteristics of ${persona}, 
              and keep replies easy to understand for the learner. 
              Gently correct major mistakes. 
              If the user says something with cultural significance, 
              briefly explain in English what it means in the local culture.
              The whole chat should only focus on language learning and teaching.
              Be sure to also include some related sentence in ${language} to help the student learn. 
              Keep each reply as brief as possible:
                1. Respond to the user's message in one sentence in the target language, followed by its English translation.
                2. Provide one improved version of the user's sentence, preserving its original meaning.`.trim(),
            }],
          },
          contents: req.body.contents,
        }),
      },
    )

    res.status(response.status).json(await response.json())
  } catch {
    res.status(502).json({ error: { message: 'Gemini Request FAILED' } })
  }
})

app.listen(3001, () => console.log('Backend: http://localhost:3001'))