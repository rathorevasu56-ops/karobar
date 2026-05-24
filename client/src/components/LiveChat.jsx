import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

const socket = io(import.meta.env.VITE_API_URL);

const LiveChat = ({ sellerId }) => {
  const { user } = useSelector(state => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (user) {
      socket.emit('joinChat', user._id);
      socket.on('newMessage', (data) => {
        setMessages(prev => [...prev, data]);
      });
    }
    return () => socket.off('newMessage');
  }, [user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const messageData = {
      senderId: user._id,
      receiverId: sellerId,
      message: input,
      timestamp: new Date()
    };
    socket.emit('sendMessage', messageData);
    setMessages(prev => [...prev, { ...messageData, isOwn: true }]);
    setInput('');
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="fixed bottom-6 left-6 bg-green-600 text-white p-3 rounded-full shadow-lg"><FaComments size={24} /></button>
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-80 bg-white rounded-lg shadow-xl flex flex-col z-50">
          <div className="flex justify-between items-center p-3 bg-green-600 text-white rounded-t-lg">
            <span>Chat with Seller</span>
            <button onClick={() => setIsOpen(false)}><FaTimes /></button>
          </div>
          <div className="h-80 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`${msg.senderId === user?._id ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.senderId === user?._id ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>{msg.message}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t flex">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} className="flex-1 border rounded-l-lg px-2 py-1" />
            <button onClick={sendMessage} className="bg-green-600 text-white px-3 rounded-r-lg"><FaPaperPlane /></button>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;