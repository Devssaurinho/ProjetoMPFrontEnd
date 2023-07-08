import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PrefCheckBox from './prefcheckbox';

export default function PreferenciasForm() {
  const [preferences, setPreferences] = useState([]);
  const navigate = useNavigate();
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const fetchPreferences = async () => {
    try {
      const response = await fetch('http://localhost:8000/Preferencias/lista-preferencias');
      if (!response.ok) {
        throw new Error('Erro ao obter as preferências');
      }
      const data = await response.json();
      setPreferences(data);
    } catch (error) {
      console.error('Erro ao obter as preferências:', error);
    }
  };

  const userData = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {
    if (!userData) {
      // Se não houver informações de usuário, redireciona para a página de login
      navigate('/login');
    } else {
      fetchPreferences();
      const savedPreferences = JSON.parse(localStorage.getItem('selectedPreferences'));
      if (savedPreferences) {
        setSelectedPreferences(savedPreferences);
      }
    }
  }, [userData, navigate]);

  const handlePreferenceChange = (preference) => {
    setSelectedPreferences((prevPreferences) => {
      const updatedPreferences = prevPreferences.includes(preference)
        ? prevPreferences.filter((pref) => pref !== preference)
        : [...prevPreferences, preference];
      return updatedPreferences;
    });
  };

  const handleSavePreferences = async () => {
    console.log('Selected Preferences:', selectedPreferences);
    try {
      const response = await fetch(`http://localhost:8000/Usuarios/update/${localStorage.getItem('userData').id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ preferences: selectedPreferences }),
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar as preferências do usuário');
      }
      console.log('Preferências atualizadas com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar as preferências:', error);
    }
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
    </div>
  );
}
