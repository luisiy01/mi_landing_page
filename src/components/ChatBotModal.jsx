import React, { useState, useRef, useEffect } from 'react';
import './ChatBotModal.css';

const ChatBotModal = () => {
  const [isOpen, setIsOpen] = useState(false); // Controla la visibilidad
  const [messages, setMessages] = useState([
    { text: "¡Hola! Soy el asistente virtual de Luis. ¿Qué te gustaría saber sobre mí?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { text: data.reply, sender: 'bot' }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Error de conexión.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {/* Botón Flotante (Trigger) */}
      <button className={`chat-trigger ${isOpen ? 'active' : ''}`} onClick={toggleChat}>
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Ventana del Chat */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>Asistente IA</h4>
            <span className="online-dot"></span>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-row ${msg.sender}`}>
                <div className="bubble">{msg.text}</div>
              </div>
            ))}
            {isLoading && <div className="message-row bot"><div className="bubble typing">...</div></div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe un mensaje..."
              style={{color:'black'}}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotModal;