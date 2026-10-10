import express from 'express'
import dotenv from 'dotenv'

dotenv.config({ path: new URL('./.env', import.meta.url) })

const app = express()
const model = 'gemini-3.5-flash'

app.use(express.json({ limit: '32kb' }))

app.post(`/api/gemini/${model}`, async (req, res) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({ contents: req.body.contents }),
      },
    )

    res.status(response.status).json(await response.json())
  } catch {
    res.status(502).json({ error: { message: 'Gemini Request FAILED' } })
  }
})

app.listen(3001, () => console.log('Backend: http://localhost:3001'))