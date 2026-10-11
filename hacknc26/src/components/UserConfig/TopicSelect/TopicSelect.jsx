import { useState } from 'react'
import './TopicSelect.css'

const examplesByLanguage = {
  english: [
    {
      label: 'Homecoming week',
      topic: 'Making plans for a high school homecoming game',
      persona: 'American high school classmate',
    },
    {
      label: 'Thanksgiving dinner',
      topic: 'Preparing Thanksgiving dinner and talking with relatives',
      persona: 'American cousin',
    },
    {
      label: 'College game day',
      topic: 'Going to a college football tailgate',
      persona: 'American college student',
    },
  ],
  chinese: [
    {
      label: '春节团圆饭 (Spring Festival reunion dinner)',
      topic: 'Preparing for a Spring Festival reunion dinner',
      persona: 'Chinese cousin',
    },
    {
      label: '中秋节 (Mid-Autumn Festival)',
      topic: 'Sharing mooncakes and making Mid-Autumn Festival plans',
      persona: 'Chinese university roommate',
    },
    {
      label: '火锅聚餐 (Hotpot dinner)',
      topic: 'Choosing ingredients and ordering at a hotpot restaurant',
      persona: 'Chinese friend',
    },
  ],
  japanese: [
    {
      label: '文化祭 (School cultural festival)',
      topic: 'Planning a class café for the school cultural festival (文化祭)',
      persona: 'Japanese student',
    },
    {
      label: '花火大会 (Fireworks festival)',
      topic: 'Going to a summer fireworks festival (花火大会) and trying festival food',
      persona: 'Japanese friend',
    },
    {
      label: '初詣 (First shrine visit of the New Year)',
      topic: 'Visiting a shrine for the first prayer of the New Year (初詣)',
      persona: 'Japanese friend',
    },
  ],
}

function TopicSelect({ language, onContinue, onBack }) {
  const [topic, setTopic] = useState('')
  const [persona, setPersona] = useState('')
  const [selectedExample, setSelectedExample] = useState(null)

  const examples = examplesByLanguage[language.id] ?? []

  function handleSubmit(event) {
    event.preventDefault()

    const cleanTopic = topic.trim()
    const cleanPersona = persona.trim()

    if (cleanTopic && cleanPersona) {
      onContinue({
        topic: cleanTopic,
        persona: cleanPersona,
      })
    }
  }

  return (
    <main className="topic-page">
      <div className="topic-brand">
        Local<span>Chat</span>
      </div>

      <section className="topic-panel">
        <h1>What’s on your mind?</h1>
        <p className="topic-subtitle">
          Choose an idea or create your own conversation.
        </p>

        <form onSubmit={handleSubmit}>
          <p className="topic-examples-label">Try a conversation</p>

          <div className="topic-example-grid">
            {examples.map((example) => (
              <button
                key={example.label}
                className={`topic-example ${
                  selectedExample === example ? 'selected' : ''
                }`}
                type="button"
                aria-pressed={selectedExample === example}
                onClick={() => {
                  setTopic(example.topic)
                  setPersona(example.persona)
                  setSelectedExample(example)
                }}
              >
                <strong>{example.label}</strong>
                <span>Talk to a {example.persona}</span>
              </button>
            ))}
          </div>

          <label className="topic-label" htmlFor="conversation-topic">
            What would you like to talk about in {language.name}?
          </label>
          <textarea
            id="conversation-topic"
            className="topic-input"
            value={topic}
            onChange={(event) => {
              setTopic(event.target.value)
              setSelectedExample(null)
            }}
            placeholder={`For example: ${examples[0]?.topic ?? 'weekend plans'}`}
            maxLength={300}
            rows={3}
          />

          <label
            className="topic-label topic-persona-label"
            htmlFor="conversation-persona"
          >
            Who would you like to talk to?
          </label>
          <textarea
            id="conversation-persona"
            className="topic-input"
            value={persona}
            onChange={(event) => {
              setPersona(event.target.value)
              setSelectedExample(null)
            }}
            placeholder={`For example: ${examples[0]?.persona ?? 'a local friend'}`}
            maxLength={120}
            rows={2}
          />

          <p className="topic-hint">
            Your conversation will be in {language.name}.
          </p>

          <button
            className="topic-continue"
            type="submit"
            disabled={!topic.trim() || !persona.trim()}
          >
            Start conversation →
          </button>
        </form>

        <button className="topic-back" type="button" onClick={onBack}>
          ← Back to languages
        </button>
      </section>
    </main>
  )
}

export default TopicSelect