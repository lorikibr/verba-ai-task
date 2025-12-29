export default function ChatMessage({ text, sender, timestamp }) {
  const isUser = sender === 'user';
  return (
    <div className={`message-container ${isUser ? 'user' : 'bot'}`}>
      <div className="message-bubble">
        {text}
      </div>
      <span className="timestamp">
        {new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </span>
    </div>
  );
}