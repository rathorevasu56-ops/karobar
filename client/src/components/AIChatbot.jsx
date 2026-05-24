import React, { useState } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hi! I'm your fashion assistant. Need help finding something?", sender: 'bot' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const response = await axios.post('/api/ai/chat', { message: input });
      setMessages(prev => [...prev, { text: response.data.reply, sender: 'bot' }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Sorry, I'm having trouble. Please try again.", sender: 'bot' }]);
    }
    setLoading(false);
  };

  return (
    <>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 z-50">
          <FaRobot size={24} />
        </button>
      )}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b bg-blue-600 text-white rounded-t-lg">
            <span className="font-bold">AI Shopping Assistant</span>
            <button onClick={() => setIsOpen(false)}><FaTimes /></button>
          </div>
          <div className="h-96 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>{msg.text}</span>
              </div>
            ))}
            {loading && <div className="text-left"><span className="inline-block p-2 bg-gray-200 rounded-lg">Typing...</span></div>}
          </div>
          <div className="p-4 border-t flex">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} placeholder="Ask about products..." className="flex-1 border rounded-l-lg px-3 py-2" />
            <button onClick={sendMessage} className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700">Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;