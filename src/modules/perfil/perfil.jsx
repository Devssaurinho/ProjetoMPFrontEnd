import React, { useEffect, useState } from 'react';

function Profile() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getStoredUsername = () => {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      }
    };

    getStoredUsername();
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
              <h2 className="text-white">Nome de usuário:</h2>
              <h2 className="text-white ml-2">{username}</h2>
            </div>
            {/* Restante do código do perfil */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
