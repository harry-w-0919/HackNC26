# HackNC 2026

## About This Project
Our project is called **LocalChat**. 

LocalChat allows you to learn foreign languages under the setting that you wanted. Our current version provides English, Chinese, and Japanese to choose from, and uses English as the default language. 

For further information, please visit: `https://devpost.com/software/simple-language-learning-chatbot`. 

Thank you.

## Requirements
1. Node.js `v22.19.0`
2. pnpm `12.10.1`
3. Google Gemini API Key

Node.js: `https://nodejs.org/en`  
pnpm: `https://pnpm.io/`

For MacOS users, Node.js and pnpm can be installed by using Homebrew.

## Project Dependencies and Configurations
1. Open terminal
2. Type the following command:
```bash
# clone this repository
git clone https://github.com/harry-w-0919/HackNC26.git

# after cd into the cloned repository, cd into React project by
cd hacknc26

# create a file called ".env" inside "server" directory and paste your Gemini API Key inside (replace <YOUR_API_KEY> with your own key)
echo "GEMINI_API_KEY=<YOUR_API_KEY>" > server/.env

# install dependencies
pnpm install

# start the backend server
node server/index.js
```
```bash
# start the frontend by typing the following command (open a new terminal window and cd into the same directory as we are now, so you should be in "hacknc26")
pnpm dev
```
3. Open your browser and type the address demonstrated by Vite (in the terminal window where you type `pnpm dev`), and you should be able to run the project. **Be sure to keep both terminal opened.**

## References
Gemini API documentation: `https://ai.google.dev/api/generate-content#v1beta.GenerationConfig`

LLM-Connector documentation: `https://github.com/react-chatbotify-plugins/llm-connector/blob/main/docs/providers/Gemini.md`

React-Chatbotify documentation: `https://react-chatbotify.com/docs/v2/introduction/quickstart/`

Markdown Renderer documentation: `https://www.npmjs.com/package/@rcb-plugins/markdown-renderer`


## Usage of Agentic Tools
This project contains code that was either generated or written under the assistance of AI agent, and these tasks including css-style improvements, React debugging, and backend-server connection as well as debugging. 