import React from 'react';

export default function Meus() {
  const state = {
    people: [
      { id: 1, name: 'Aluizio' },
      { id: 2, name: 'Guilherme' },
      { id: 3, name: 'Carol' },
    ],
  };

  const { people } = state;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <h2 className="py-3 block text-sm font-medium leading-6 text-white">Lista de Match</h2>
          <ul>
            {people.map((person) => (
              <li className="text-white" key={person.id}>
                {person.name}
                <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"> Aceitar </button>
                <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"> Recusar </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
