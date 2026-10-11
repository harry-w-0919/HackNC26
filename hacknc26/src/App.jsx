import Chatbot from './components/Chatbot/Chatbot.jsx'
import { useState } from 'react'
import LanguageSelect from './components/UserConfig/LanguageSelect/LanguageSelect.jsx'
import TopicSelect from './components/UserConfig/TopicSelect/TopicSelect.jsx'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState('')
  const [selectedPersona, setSelectedPersona] = useState('')
  const [showChatbot, setShowChatbot] = useState(false)

  function handleTopicContinue({ topic, persona }) {
    setSelectedTopic(topic)
    setSelectedPersona(persona)
  }

  if (showChatbot) {
    return (
      <Chatbot
        language={selectedLanguage.id}
        topic={selectedTopic}
        persona={selectedPersona}
        onBack={() => setShowChatbot(false)}
      />
    )
  }

  if (!selectedLanguage) {
    return (
      <LanguageSelect
        onContinue={setSelectedLanguage}
      />
    )
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
          className="topic-continue"
          type="button"
          onClick={() => setShowChatbot(true)}
        >
          Open chatbot
        </button>

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