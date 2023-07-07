import React, { useState } from 'react';
import Textarea from '@mui/joy/Textarea';
import { v4 as uuidv4 } from 'uuid';

export default function Chat() {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (message) => {
    if (message.trim() !== '') {
      setMessages([...messages, { id: uuidv4(), text: message }]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <h2 className="py-3 block text-sm font-medium leading-6 text-white">Chat</h2>
          <div className="messages-container">
            {messages.map((message) => (
              <div key={message.id} className="message">{message.text}</div>
            ))}
          </div>
          <Textarea
            size="md"
            name="Size"
            placeholder="Digite sua mensagem..."
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                handleMessageSubmit(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
