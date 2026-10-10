import './App.css'
import Chatbot from './components/Chatbot/Chatbot.jsx'
import { useState } from 'react'
import LanguageSelect from './components/UserConfig/LanguageSelect/LanguageSelect.jsx'
import TopicSelect from './components/UserConfig/TopicSelect/TopicSelect.jsx'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState('')
  const [selectedPersona, setSelectedPersona] = useState('')

  function handleTopicContinue({ topic, persona }) {
    setSelectedTopic(topic)
    setSelectedPersona(persona)
  }

  if (!selectedLanguage) {
    return <LanguageSelect onContinue={setSelectedLanguage} />
  }

  if (!selectedTopic) {
    return (
      <TopicSelect
        language={selectedLanguage}
        onContinue={handleTopicContinue}
        onBack={() => setSelectedLanguage(null)}
      />
    )
  }

  return (
    <main className="topic-page">
      <div className="topic-brand">
        Local<span>Chat</span>
      </div>

      <section className="topic-panel">
        <h1>Ready to chat</h1>
        <p className="topic-subtitle">
          Language: {selectedLanguage.name}
          <br />
          Topic: {selectedTopic}
          <br />
          Conversation partner: {selectedPersona}
        </p>

        <button
          className="topic-back"
          type="button"
          onClick={() => {
            setSelectedTopic('')
            setSelectedPersona('')
          }}
        >
          ← Change topic
        </button>
      </section>
    </main>
  )
}

export default App