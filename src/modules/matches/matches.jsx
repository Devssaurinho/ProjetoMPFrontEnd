import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Componente Painel.
 * Um componente que exibe uma lista de usuarios com que se pode fazer amizades.
 * @returns {JSX.Element} Retorna o componente Painel.
 */

export default function MatchesForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const userData = JSON.parse(localStorage.getItem('responseData'));
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:8000/Usuarios/lista-usuarios');
      const data = await response.json();
      const filteredUsers = data.filter((item) => item.username.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredList(filteredUsers);
      setSearchPerformed(true);
    } catch (error) {
      console.error('Erro ao realizar a busca:', error);
    }
  };

  /**
    * Função handleAddFriend
    * Adiciona ou remove um amigo da lista de amigos do usuário.
    * Realiza uma chamada à API para atualizar os amigos do usuário.
    * @param {string} userId - O ID do usuário amigo.
    */

  const handleAddFriend = async (userId) => {
    if (userData) {
      const updatedUserData = { ...userData };
      if (updatedUserData.amigos) {
        if (!updatedUserData.amigos.includes(userId)) {
          updatedUserData.amigos.push(userId);
          localStorage.setItem('responseData', JSON.stringify(updatedUserData));
          toast.success('Amigo adicionado com sucesso!');
        } else {
          updatedUserData.amigos = updatedUserData.amigos.filter((amigo) => amigo !== userId);
          localStorage.setItem('responseData', JSON.stringify(updatedUserData));
          toast.success('Amigo removido com sucesso!');
        }

        try {
          const response = await fetch(`http://localhost:8000/Usuarios/update/${userData.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amigos: updatedUserData.amigos }),
          });
          if (!response.ok) {
            throw new Error('Erro ao atualizar os amigos do usuário');
          }
          console.log('Amigos do usuário atualizados com sucesso!');
        } catch (error) {
          console.error('Erro ao atualizar os amigos do usuário:', error);
        }
      } else {
        updatedUserData.amigos = [userId];
        localStorage.setItem('responseData', JSON.stringify(updatedUserData));
        toast.success('Amigo adicionado com sucesso!');

        try {
          const response = await fetch(`http://localhost:8000/Usuarios/update/${userData.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amigos: updatedUserData.amigos }),
          });
          if (!response.ok) {
            throw new Error('Erro ao atualizar os amigos do usuário');
          }
          console.log('Amigos do usuário atualizados com sucesso!');
        } catch (error) {
          console.error('Erro ao atualizar os amigos do usuário:', error);
        }
      }
    } else {
      console.log('Usuário não encontrado.');
    }
  };

  /**
    * Função handleSaveFriends
    * Salva a lista de amigos atualizada no armazenamento local.
    */

  const handleSaveFriends = () => {
    if (userData) {
      const updatedUserData = { ...userData };
      updatedUserData.amigos = filteredList.map((item) => item.id);
      localStorage.setItem('responseData', JSON.stringify(updatedUserData));
      toast.success('Amigos salvos com sucesso!');
    } else {
      toast.success('Usuário não encontrado!');
    }
  };

  /**
    * Função handleInputChange
    * Atualiza o estado do termo de busca com o valor do campo de entrada.
    * @param {object} e - O evento de alteração do campo de entrada.
    */

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0" style={{ top: '-100px' }}>
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
              Encontre pessoas ou grupos:
            </h2>
            <div className="flex items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Pesquisar..."
                className="px-4 py-2 rounded-l-md text-gray-800 focus:outline-none focus:ring focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="px-4 py-2 rounded-r-md bg-blue-500 text-white font-bold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
              >
                Buscar
              </button>
            </div>
            {searchPerformed && filteredList.length > 0 && filteredList.map((item) => (
              <div className="text-white" key={item.id}>
                {item.username}
                {userData && userData.amigos && userData.amigos.includes(item.id) ? (
                  <button
                    type="button"
                    onClick={() => handleAddFriend(item.id)}
                    style={{
                      marginLeft: '136px',
                      backgroundColor: 'red',
                      borderRadius: '12px',
                      padding: '3px 9px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Remover
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleAddFriend(item.id)}
                    style={{
                      marginLeft: '136px',
                      backgroundColor: 'green',
                      borderRadius: '12px',
                      padding: '3px 9px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Adicionar
                  </button>
                )}
              </div>
            ))}
            {searchPerformed && filteredList.length > 0 && (
              <button
                type="button"
                onClick={handleSaveFriends}
                className="px-3 py-1.5 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Salvar Amigos
              </button>
            )}
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-3 ml-20 py-1.5 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
}
