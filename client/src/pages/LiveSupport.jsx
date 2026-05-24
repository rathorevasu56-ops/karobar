import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

const socket = io(import.meta.env.VITE_API_URL);

const LiveSupport = () => {
  const { user } = useSelector(state => state.auth);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.emit('joinChat', user?._id);
    socket.on('supportMessage', (data) => setMessages(prev => [...prev, data]));
    return () => socket.off('supportMessage');
  }, [user]);

  const sendMessage = () => {
    if (!input.trim()) return;
    socket.emit('supportMessage', { userId: user._id, message: input, from: 'user' });
    setMessages(prev => [...prev, { message: input, from: 'user' }]);
    setInput('');
  };

  return (<div className="container mx-auto px-4 py-8 max-w-2xl"><div className="bg-white rounded-lg shadow h-96 flex flex-col"><div className="p-4 bg-blue-600 text-white rounded-t-lg"><h2 className="font-bold">Live Support</h2></div><div className="flex-1 overflow-y-auto p-4 space-y-2">{messages.map((msg, idx) => (<div key={idx} className={`${msg.from === 'user' ? 'text-right' : 'text-left'}`}><span className={`inline-block p-2 rounded-lg ${msg.from === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>{msg.message}</span></div>))}<div ref={messagesEndRef} /></div><div className="p-4 border-t flex"><input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} className="flex-1 border rounded-l-lg px-3 py-2" /><button onClick={sendMessage} className="bg-blue-600 text-white px-4 rounded-r-lg">Send</button></div></div></div>);
};

export default LiveSupport;