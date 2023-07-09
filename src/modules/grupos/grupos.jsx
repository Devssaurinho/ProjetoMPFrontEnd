import React, { useEffect, useState } from 'react';

const imageUrl = 'https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-group-icon-png-image_1796653.jpg';

export default function Grupos() {
  const [data, setData] = useState(null);
  const getMatchs = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/Match/lista-match-grupo-por-usuario/${id}`);
      if (!response.ok) {
        throw new Error('Erro ao obter os Matchs');
      }
      const responseData = await response.json();
      setData(responseData);
      console.log(data);
    } catch (error) {
      console.error('Erro ao obter os Matchs:', error);
    }
  };

  useEffect(() => {
    const getStoredId = () => {
      const storedData = localStorage.getItem('responseData');
      if (storedData) {
        const { id } = JSON.parse(storedData);
        return id;
      }
      return null;
    };

    const IdUsuarioBase = getStoredId(); // Retrieve the stored id
    getMatchs(IdUsuarioBase); // Call getMatchs with the id
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="w-1/3 flex items-center justify-center relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <ul className="divide-y divide-gray-100">
          {data !== null && Object.entries(data).map(([key, value]) => (
            <li className="my-5" key={key}>
              <div className="flex gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={imageUrl} alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6  text-white">{key}</p>
                  <p className="mt-1 truncate text-xs leading-5  text-white">{value}</p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <button type="button" className=" ml-9 px-3 py-1.5 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Entrar </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}
