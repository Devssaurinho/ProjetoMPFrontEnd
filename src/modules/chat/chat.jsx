import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chat() {
  const [group] = useState(null);
  const [messages, setMessages] = useState([]);
  const [user] = useState(null);
  const [message, setMessage] = useState('');
  const [data, setData] = useState(null);

  // Função para obter os Matchs
  const getMensagemPriv = async () => {
    const storedData = localStorage.getItem('responseData');
    console.log(storedData);
    const destinatario = JSON.parse(storedData);
    const idUsuario = JSON.parse(storedData);
    console.log(idUsuario);
    const guardaamigo = destinatario.amigos[0];
    try {
      const response = await axios.post(`http://localhost:8000/ChatPrivado/buscar-mensagens/${idUsuario.id}/${guardaamigo}`);
      if (!response.ok) {
        throw new Error('erro ao obter mensagens privadas');
      }
      const responseData = await response.json();
      setData(responseData);
      console.log(data);
    } catch (error) {
      console.error('IVANOVINHO', error);
    }
  };
  getMensagemPriv();
  const getMatchs = async (id) => {
    console.log(id);
    try {
      const response = await fetch('http://localhost:8000/Grupos/busca-grupos-por-nome/Romance');
      if (!response.ok) {
        throw new Error('Erro ao obter os Matchs');
      }
      const responseData = await response.json();
      setData(responseData);
      console.log(responseData.id);
      console.log(data);
    } catch (error) {
      console.error('Erro ao obter os Matchs:', error);
    }
  };

  // Função para enviar a mensagem
  const sendMessage = async (groupId) => {
    console.log('cliquei na poha do botao');
    const storedData = localStorage.getItem('responseData');
    const { id } = JSON.parse(storedData);

    const userId = id;
    try {
      if (!groupId) {
        console.error('Grupo não definido');
        return;
      }
      const response = await axios.post(`http://localhost:8000/ChatGrupo/grupos_mensagens/${groupId}/${userId}/`, {
        message,
        userId,
      });
      // Atualiza a lista de mensagens com a nova mensagem enviada
      setMessages([...messages, response.data]);
      // Limpa o campo de mensagem
      setMessage('');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  useEffect(() => {
    const getStoredId = () => {
      const storedData = localStorage.getItem('responseData');
      if (storedData) {
        const { id } = JSON.parse(storedData);
        return id;
      }
      return null;
    };

    const userId = getStoredId(); // Retrieve the stored id
    getMatchs(userId); // Call getMatchs with the id
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#4e43ac] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="container py-20 content">
            <h2 className="text-center mb-4 text-white text-2xl font-bold">Chat em Grupo</h2>
            {group && (
              <div className="mb-4 text-white">
                <h3 className="text-lg font-semibold">Grupo:</h3>
                <p>{group.grupos}</p>
                {group.participants && (
                  <div>
                    <h4 className="text-lg font-semibold">Participantes:</h4>
                    <ul className="mt-2">
                      {group.participants.map((participant) => (
                        <li key={participant.id} className="text-white">
                          {participant.username}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            {user && (
              <div>
                <h4 className="text-lg font-semibold text-white">Usuário:</h4>
                <p className="text-white">{user.username}</p>
              </div>
            )}

            <div className="mb-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => sendMessage(data?.id, user?.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
              >
                Enviar
              </button>
            </div>

            <div className="mt-8">
              {messages.map((msg) => (
                <div key={msg.id} className="bg-white p-2 mb-2 rounded">
                  <p className="text-gray-800">{msg.content}</p>
                  <p className="text-gray-500 text-sm">{msg.username}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative isolate overflow-hidden bg-[#4e43ac] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <h2>Chat Privado</h2>
        </div>
      </div>
    </div>
  );
}

export default Chat;
