import React, { useEffect, useState } from 'react';
import cat from '../../assets/cat2.png';

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
          <div className="relative mt-16 h-auto lg:mt-1 py-5">
            <img
              className="relative mt-16 h-auto lg:mt-1 flex items-center justify-center"
              src={cat}
              alt="Boy"
              width={600}
              height={1500}
            />
          </div>
          <div className="container py-4 content">
            <h2
              className="text-center mb-4 text-white text-2xl font-bold"
            >
              Perfil
            </h2>
            <table className="text-white w-full">
              <tbody>
                <tr className="bg-[#4e43ac]">
                  <td className="font-bold px-4 py-2 border-b border-[#4eaaff]">Nome:</td>
                  <td className="px-4 py-2 border-b border-[#4eaaff]">{username}</td>
                </tr>
                <tr className="bg-[#4e43ac]">
                  <td className="font-bold px-4 py-2 border-b border-[#4eaaff]">ID de usuário:</td>
                  <td className="px-4 py-2 border-b border-[#4eaaff]">{id}</td>
                </tr>
                <tr className="bg-[#4e43ac]">
                  <td className="font-bold px-4 py-2 border-b border-[#4eaaff]">Preferências:</td>
                  <td className="px-4 py-2 border-b border-[#4eaaff]">{preferencias}</td>
                </tr>
                <tr className="bg-[#4e43ac]">
                  <td className="font-bold px-4 py-2 border-b border-[#4eaaff]">Amigos:</td>
                  <td className="px-4 py-2 border-b border-[#4eaaff]">{amigos}</td>
                </tr>
                <tr className="bg-[#4e43ac]">
                  <td className="font-bold px-4 py-2 border-b border-[#4eaaff]">Bloqueados:</td>
                  <td className="px-4 py-2 border-b border-[#4eaaff]">{bloqueados}</td>
                </tr>
                <tr className="bg-[#4e43ac]">
                  <td className="font-bold px-4 py-2">Grupos:</td>
                  <td className="px-4 py-2">{grupos}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <a
                href="/"
                className="rounded-md bg-[#4e42ac] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Voltar
              </a>
            </div>
            {/* Restante do código do perfil */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
