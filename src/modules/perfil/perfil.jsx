import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [username, setUsername] = useState('');
  const [preferencias, setPreferences] = useState('');
  const [amigos, setAmigos] = useState([]);
  const [bloqueados, setBloqueados] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [id, setId] = useState('');

  const getFriendName = async (friendId) => {
    try {
      const response = await axios.get(`http://localhost:8000/Usuarios/lista-usuario-por-id/${friendId}`);
      const friend = response.data;
      return friend.username; // Use a propriedade correta que contém o nome do amigo
    } catch (error) {
      console.log(`Erro ao buscar o nome do amigo com ID ${friendId}: ${error}`);
      return '';
    }
  };

  useEffect(() => {
    const getStoredData = async () => {
      const userData = JSON.parse(localStorage.getItem('responseData'));

      if (userData.username) {
        setUsername(userData.username);
      }
      if (userData.id) {
        setId(userData.id);
      }
      if (userData.preferencias) {
        const preferencesArray = userData.preferencias;
        const formattedPreferences = preferencesArray.join(', ');
        setPreferences(formattedPreferences);
      }
      if (userData.amigos) {
        const friendsArray = userData.amigos;
        const formattedFriends = await Promise.all(friendsArray.map(getFriendName));
        setAmigos(formattedFriends);
      }
      if (userData.bloqueados) {
        setBloqueados(userData.bloqueados);
      }
      if (userData.grupos) {
        setGrupos(userData.grupos);
      }
    };

    getStoredData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div
          className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
          style={{ top: '-100px' }}
        >
          <div className="container py-4 content">
            <h2
              className="text-center mb-4"
              style={{
                fontFamily: 'Verdana, sans-serif',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              Perfil
            </h2>
            <div className="flex items-center">
              <h2 className="text-white">Nome:</h2>
              <h2 className="text-white ml-2">{username}</h2>
            </div>
            <div className="flex items-center">
              <h2 className="text-white">Id de usuário:</h2>
              <h2 className="text-white ml-2">{id}</h2>
            </div>
            <div className="flex items-center">
              <h2 className="text-white">Preferências:</h2>
              <h2 className="text-white ml-2">{preferencias}</h2>
            </div>
            <div className="flex items-center">
              <h2 className="text-white">Amigos:</h2>
              <h2 className="text-white ml-2">{amigos.join(', ')}</h2>
            </div>
            <div className="flex items-center">
              <h2 className="text-white">Bloqueados:</h2>
              <h2 className="text-white ml-2">{bloqueados.join(', ')}</h2>
            </div>
            <div className="flex items-center">
              <h2 className="text-white">Grupos:</h2>
              <h2 className="text-white ml-2">{grupos.join(', ')}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
