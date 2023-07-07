import React, { useState } from 'react';

export default function MatchesForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [list] = useState([
    { id: 1, name: 'Person A' },
    { id: 2, name: 'Person B' },
    { id: 3, name: 'Group A' },
    { id: 4, name: 'Group B' },
  ]);
  const filteredList = list.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleSearch = () => {
    // Implemente aqui a lógica adicional que desejar para a ação de busca
    console.log('Realizar busca:', searchTerm);
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
              Encontre aqui usuários/grupos:
            </h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
              />
              <button type="button" onClick={handleSearch} style={{ marginLeft: '10px', color: 'white' }}>
                Buscar
              </button>
            </div>
            {/* Render the filtered list */}
            {filteredList.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
