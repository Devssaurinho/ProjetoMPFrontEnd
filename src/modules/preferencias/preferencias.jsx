import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrefCheckBox from './prefcheckbox';

/**
 * Componente PreferenciasForm.
 * Um componente que exibe uma lista de preferências.
 * @returns {JSX.Element} Retorna o componente PreferenciasForm.
 */

export default function PreferenciasForm() {
  const [preferences, setPreferences] = useState([]);
  const navigate = useNavigate();
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  /**
   * Função fetchPreferences
   * Realiza uma requisição GET para obter a lista de preferências e atualiza o estado "preferences" com os dados recebidos.
   */

  const fetchPreferences = async () => {
    try {
      const response = await fetch('http://localhost:8000/Preferencias/lista-preferencias');
      if (!response.ok) {
        throw new Error('Erro ao obter as preferências');
      }
      const data = await response.json();
      await setPreferences(data);
    } catch (error) {
      console.error('Erro ao obter as preferências:', error);
    }
  };

  const userData = JSON.parse(localStorage.getItem('responseData'));

  useEffect(() => {
    if (!userData) {
      /**
       * Função para exigir o login do usuario.
       * Realiza uma requisição de login se caso não obter as informações do usuário, para ter acesso as escolhas das preferencias.
       */
      navigate('/login');
    } else {
      fetchPreferences();
      const savedPreferences = userData.preferencias;
      if (savedPreferences) {
        setSelectedPreferences(savedPreferences);
      }
    }
  }, []);

  /**
   * Função handlePreferenceChange
   * Atualiza o estado "selectedPreferences" com as preferências selecionadas pelo usuário.
   * @param {string} preference - A preferência selecionada pelo usuário.
   */

  const handlePreferenceChange = (preference) => {
    setSelectedPreferences((prevPreferences) => {
      const updatedPreferences = prevPreferences.includes(preference)
        ? prevPreferences.filter((pref) => pref !== preference)
        : [...prevPreferences, preference];
      return updatedPreferences;
    });
  };

  /**
   * Função handleSavePreferences
   * Envia uma requisição PUT para atualizar as preferências do usuário no servidor.
   * Atualiza o estado local e o armazenamento local com as preferências selecionadas.
   */

  const handleSavePreferences = async () => {
    console.log('Selected Preferences:', selectedPreferences);
    try {
      const response = await fetch(`http://localhost:8000/Usuarios/update/${userData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ preferencias: selectedPreferences }),
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar as preferências do usuário');
      }
      toast.success('Preferências atualizadas com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar as preferências:', error);
    }
    userData.preferencias = selectedPreferences;
    localStorage.setItem('responseData', JSON.stringify(userData));
  };

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
              Selecione Preferências:
            </h2>
            {preferences.map((preference) => (
              <PrefCheckBox
                key={preference}
                name={preference}
                checked={selectedPreferences.includes(preference)} // Adiciona a propriedade checked
                onChange={() => handlePreferenceChange(preference)}
              />
            ))}
            <div className="mt-3 flex gap-x-2">
              <button
                type="button"
                onClick={handleSavePreferences}
                className="px-3 py-1.5 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Salvar
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-3 ml-40 py-1.5 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
}
