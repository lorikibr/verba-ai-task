import { useState } from 'react';

export default function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <form className="input-area" onSubmit={handleSubmit}>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type a message..."
        disabled={disabled}
      />
      <button type="submit" disabled={disabled || !text.trim()}>Send</button>
    </form>
  );
}