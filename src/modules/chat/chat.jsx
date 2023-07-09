import React, { useEffect, useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  useEffect(() => {
    // Aqui você pode adicionar a lógica para carregar as mensagens iniciais do grupo de preferências

    // Exemplo de código para carregar mensagens do grupo "Esportes"
    const loadMessages = () => {
      // Aqui você pode fazer uma chamada a API, ou recuperar as mensagens de algum lugar

      // Supondo que você tenha um array de mensagens para o grupo "Esportes"
      const initialMessages = [
        { id: 1, text: 'Olá, pessoal! Quem vai assistir ao jogo hoje?' },
        { id: 2, text: 'Aposto que o time X vai ganhar!' },
        { id: 3, text: 'Alguém sabe a escalação do time Y?' },
      ];

      setMessages(initialMessages);
    };

    loadMessages();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <h2 className="py-3 block text-sm font-medium leading-6 text-white">Chat</h2>
          <div className="message-container">
            {messages.map((message) => (
              <div key={message.id} className="message">
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="px-3 py-2 rounded-md bg-gray-800 text-white"
              placeholder="Digite sua mensagem..."
            />
            <button
              onClick={handleSendMessage}
              type="button"
              className="ml-2 px-4 py-2 rounded-md bg-blue-600 text-white"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
