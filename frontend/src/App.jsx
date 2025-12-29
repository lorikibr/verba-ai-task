import { useState, useEffect, useRef } from 'react';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async (text) => {
    const userMsg = { text, sender: 'user', timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json();
      
      setMessages((prev) => [...prev, { 
        text: data.response, 
        sender: 'bot', 
        timestamp: data.timestamp 
      }]);
    } catch (err) {
      setMessages((prev) => [...prev, { 
        text: "Error: Could not reach the server.", 
        sender: 'bot', 
        timestamp: new Date() 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <header className="app-header">Verba AI Support</header>
      <div className="chat-window">
        {messages.map((m, i) => <ChatMessage key={i} {...m} />)}
        {isLoading && (
  <div className="bot-typing">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
)}
        <div ref={scrollRef} />
      </div>
      <ChatInput onSend={handleSend} disabled={isLoading} />
    </div>
  );
}

export default App;