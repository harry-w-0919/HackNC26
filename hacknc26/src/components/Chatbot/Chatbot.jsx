import ChatBot from 'react-chatbotify'
import LlmConnector, { GeminiProvider } from '@rcb-plugins/llm-connector'
import './Chatbot.css'

const ChatBotComponent = () => {
	const flow = {
		start: {
			message: 'Ask away!',
			transition: 0,
			path: 'gemini',
		},
		gemini: {
			llmConnector: {
				provider: new GeminiProvider({
					mode: 'proxy',
					model: 'gemini-3.5-flash',
					baseUrl: '/api/gemini',
					responseFormat: 'json',
				}),
				outputType: 'full',
			},
		},
	}

	return (
		<div className="chatbot-component">
			<ChatBot
			settings={{
				general: { embedded: true },
				chatHistory: { disabled: true },
				header: {
					title: "Language Learning ChatBot",
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
				},
			}}
			plugins={[LlmConnector()]}
			flow={flow}
		/>
		</div>
	)
}

export default ChatBotComponent