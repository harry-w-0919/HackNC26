import { useState } from 'react'
import './LanguageSelect.css'

const languages = [
  { id: 'english', name: 'English', nativeName: 'English', greeting: 'Hello!' },
  { id: 'chinese', name: 'Chinese', nativeName: '中文', greeting: '你好！' },
  { id: 'japanese', name: 'Japanese', nativeName: '日本語', greeting: 'こんにちは！' },
]

function LanguageSelect({ onContinue }) {
  const [selectedLanguage, setSelectedLanguage] = useState('')

  function handleContinue(event) {
    event.preventDefault()

    const language = languages.find(
      (item) => item.id === selectedLanguage
    )

    if (language) {
      onContinue(language)
    }
  }

  return (
    <main className="page">
  <div className="site-brand">
    Local<span>Chat</span>
  </div>

  <section className="panel">
    <h1>
      Welcome to <span className="title-brand">Local<span>Chat</span></span>
    </h1>
    <p className="subtitle">
      Choose the language you want to learn, then start talking like a local.
    </p>

        <form onSubmit={handleContinue}>
          <fieldset className="language-fieldset">
            <legend>Select a language</legend>

            <div className="language-list">
              {languages.map((language) => (
                <label
                  className={`language-card ${
                    selectedLanguage === language.id ? 'selected' : ''
                  }`}
                  key={language.id}
                >
                  <input
                    type="radio"
                    name="language"
                    value={language.id}
                    checked={selectedLanguage === language.id}
                    onChange={() => setSelectedLanguage(language.id)}
                  />

                  <span className="language-text">
                    <strong>{language.name}</strong>
                    <span>{language.nativeName}</span>
                  </span>

                  <span className="greeting">{language.greeting}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button
            className="continue-button"
            type="submit"
            disabled={!selectedLanguage}
          >
            Continue →
          </button>
        </form>
      </section>
    </main>
  )
}

export default LanguageSelect