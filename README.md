# Verba AI Technical Task - Full-Stack Chat Application

This project is a full-stack chat interface developed for the Verba AI internship technical assessment. It includes a React-based frontend and a Node.js/Express backend.

## Features
- Simulated AI responses with a deliberate delay to mimic processing time.
- Responsive UI designed to function as a centered chat interface on desktop and full-width on mobile.
- Visual typing indicator for improved user feedback.
- Backend configuration managed through environment variables.

## Tech Stack
- Frontend: React (Vite)
- Backend: Node.js, Express
- Styling: CSS3 (Flexbox and Animations)
- Version Control: Git

## Setup and Installation

### 1. Backend Setup
1. Navigate to the backend directory:
   cd backend
2. Install dependencies:
   npm install
3. Create a .env file in the backend folder and add:
   PORT=3001
4. Start the server:
   npm start

### 2. Frontend Setup
1. Navigate to the frontend directory:
   cd frontend
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev
4. Open the application at http://localhost:5173.

## AI Integration Strategy

To evolve this application into a live AI agent, the following steps would be taken:

1. API Integration: The static response logic in the backend would be replaced with requests to an LLM provider such as OpenAI or Anthropic.
2. Context Management: A history of the conversation would be maintained and passed to the API with each new prompt to ensure the agent retains context.
3. Response Streaming: Implementing Server-Sent Events (SSE) would allow the UI to display the AI's response in real-time as it is generated.
4. Data Persistence: A database like MongoDB or PostgreSQL would be integrated to store user history and session data.

---
Author: Lorik Ibraimi