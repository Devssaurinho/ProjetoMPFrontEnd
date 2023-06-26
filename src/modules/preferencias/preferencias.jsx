import React, { useState } from 'react';

export default function PreferenciasForm() {
  const [preferences, setPreferences] = useState([]);
  const handlePreferenceToggle = (preference) => {
    const updatedPreferences = preferences.includes(preference)
      ? preferences.filter((p) => p !== preference)
      : [...preferences, preference];
    setPreferences(updatedPreferences);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0" style={{ top: '-100px' }}>
          <div className="container py-4 content">
            <h2 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>
              Escolha seus tópicos favoritos
            </h2>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={preferences.includes('Waifus')}
                onChange={() => handlePreferenceToggle('Waifus')}
                id="waifusCheckbox"
              />
              <label className="form-check-label" style={{ color: 'white' }} htmlFor="waifusCheckbox">
                Waifus
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={preferences.includes('Livro')}
                onChange={() => handlePreferenceToggle('Livro')}
                id="livroCheckbox"
              />
              <label className="form-check-label" style={{ color: 'white' }} htmlFor="livroCheckbox">
                Livro
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={preferences.includes('Jogos')}
                onChange={() => handlePreferenceToggle('Jogos')}
                id="jogosCheckbox"
              />
              <label className="form-check-label" style={{ color: 'white' }} htmlFor="jogosCheckbox">
                Jogos
              </label>
            </div>
            <div className="container py-4">
              <h3 className="mt-4" style={{ color: 'white' }}>Preferências Selecionadas:</h3>
              <ul className="list-group">
                {preferences.map((preference) => (
                  <li key={preference} className="list-group-item" style={{ color: 'white' }}>
                    {preference}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3 flex gap-x-2">
              <button
                type="button"
                className="px-3 py-1.5 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
