import React, { useState } from 'react';
import axios from 'axios';

export default function MatchesForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8000/Usuarios/lista-usuarios');
      setFilteredList(response.data); // Assume que o servidor retorna uma lista de usuários filtrada pelo termo de busca
    } catch (error) {
      console.error('Erro ao realizar a busca:', error);
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    if (!value) return;

    const url = `http://localhost:8000/Usuarios/lista-usuario-por-username/${value}`;

    fetch(url)
      .then((response) => response.json())
      .then(console.log);

    console.log('handleInputChange', e.target.value);
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
            {filteredList.map((item) => (
              <div key={item.id} className="text-white mt-2">{item.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
