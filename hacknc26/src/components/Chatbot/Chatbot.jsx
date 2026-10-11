import ChatBot from 'react-chatbotify'
import LlmConnector, { GeminiProvider } from '@rcb-plugins/llm-connector'
import './Chatbot.css'
import MarkdownRenderer from "@rcb-plugins/markdown-renderer"


const ChatBotComponent = ({ language, topic, persona, onBack }) => {
	const flow = {
		start: {
			message: `Let\'s learn ${language.toUpperCase()} and talk about ${topic}!`,
			transition: 0,
			path: 'gemini',
		},
		gemini: {
			renderMarkdown: ['BOT'],
			llmConnector: {
				provider: new GeminiProvider({
					mode: 'proxy',
					model: 'gemini-3.5-flash',
					baseUrl: '/api/gemini',
					responseFormat: 'json',
					body: {
						language,
						topic,
						persona,
					},
				}),
				outputType: 'full',
			},
		},
	}

	return (
		<div className="topic-page chatbot-component">
			<div className="topic-brand">
				Local<span>Chat</span>
			</div>
			<ChatBot
				settings={{
					general: {
						embedded: true,
						primaryColor: '#277fa2',
						secondaryColor: '#1c6684',
					},
					chatHistory: { disabled: true },
					header: {
						title: "LocalChat",
						showAvatar: true,
					},
					fileAttachment: { disabled: true },
					emoji: { disabled: true },
				}}
				styles={{
					chatWindowStyle: {
						width: '600px',
						maxWidth: '100%',
						height: '700px',
						borderRadius: '24px',
						border: '1px solid #eadfd3',
						backgroundColor: '#fffdf9',
						boxShadow: '0 24px 70px rgba(79, 83, 91, 0.12)',
						overflow: 'hidden',
					},

					headerStyle: {
						background: '#277fa2',
						color: 'white',
					},

					bodyStyle: {
						backgroundColor: '#fffdf9',
					},

					botBubbleStyle: {
						backgroundColor: '#edf8fb',
						color: '#20394b',
					},

					userBubbleStyle: {
						backgroundColor: '#277fa2',
						color: 'white',
					},

					chatInputContainerStyle: {
						backgroundColor: '#fffdf9',
						borderTop: '1px solid #eadfd3',
					},

					chatInputAreaStyle: {
						backgroundColor: '#fffdf9',
						color: '#20394b',
					},

					footerStyle: {
						backgroundColor: '#fffdf9',
					},
				}}
				plugins={[LlmConnector(), MarkdownRenderer()]}
				flow={flow}
			/>

			<button type="button" onClick={onBack} className="chatbot-back">
				← Back to configuration
			</button>
		</div>
	)
}

export default ChatBotComponent