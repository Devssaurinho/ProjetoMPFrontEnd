import React, { useEffect, useState } from 'react';

function Profile() {
  const [username, setUsername] = useState('');
  const [preferencias, setPreferences] = useState('');
  const [amigos, setAmigos] = useState('');
  const [bloqueados, setBloqueados] = useState('');
  const [grupos, setGrupos] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    const getStoredData = () => {
      const userData = JSON.parse(localStorage.getItem('responseData'));

      if (userData.username) {
        setUsername(userData.username);
      }
      if (userData.id) {
        setId(userData.id);
      }

      if (userData.preferencias) {
        const preferencesArray = userData.preferencias;
        // Unir os elementos do array separados por vírgula
        const formattedPreferences = preferencesArray.join(', ');
        setPreferences(formattedPreferences);
      }
      if (userData.amigos) {
        const friendsArray = userData.amigos;
        const formattedFriends = friendsArray.join(', ');
        setAmigos(formattedFriends);
      }
      if (userData.bloqueados) {
        const blockedArray = userData.bloqueados;
        const formattedBlocked = blockedArray.join(', ');
        setBloqueados(formattedBlocked);
      }
      if (userData.grupos) {
        const groupArray = userData.grupos;
        const formattedGroup = groupArray.join(', ');
        setGrupos(formattedGroup);
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
              <h2 className="text-white ml-2">{amigos}</h2>
            </div>
            <div className="flex items-center">
              <h2 className="text-white">Bloqueados:</h2>
              <h2 className="text-white ml-2">{bloqueados}</h2>
            </div>
            <div className="flex items-center">
              <h2 className="text-white">Grupos:</h2>
              <h2 className="text-white ml-2">{grupos}</h2>
            </div>
            {/* Restante do código do perfil */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
