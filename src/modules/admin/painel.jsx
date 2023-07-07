import React, { useState, useEffect } from 'react';
import TagsInput from 'react-tagsinput';
import axios from 'axios';
import 'react-tagsinput/react-tagsinput.css';

export default function Painel() {
  const [selected, setSelected] = useState([]);
  const [atualizaSucesso, setAtualizaSucesso] = useState('');
  const [atualizaError, setAtualizaError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/Preferencias/lista-preferencias')
      .then((response) => {
        const preferencesData = response.data.preferencias.map((preference) => preference);
        setSelected(preferencesData);
      })
      .catch((error) => {
        setAtualizaError(error);
      });
  }, []);

  const handleSavePreferences = () => {
    axios
      .put('http://localhost:8000/Preferencias/atualiza-preferencias', { preferencias: selected })
      .then((response) => {
        setAtualizaSucesso(response.data); // Resposta da API em caso de sucesso
      })
      .catch((error) => {
        setAtualizaError(error); // Trate qualquer erro de requisição
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <form className="m-10">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10">
                <h2 className="text-base font-semibold leading-7 text-white">Painel de administração</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Aqui o administrador pode escolher as preferências
                  que estarão disponíveis para os usuários
                  darem match e gerar o relatório.
                </p>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <div className="mt-2 flex items-center">
                      <div>
                        <h1 className="py-3 block text-sm font-medium leading-6 text-white">Adicione ou remova preferências</h1>
                        <TagsInput value={selected} onChange={setSelected} />
                        <em className="text-white">Pressione Enter para adicionar uma nova preferência</em>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-x-2">
                      <button
                        type="button"
                        className="px-3 py-1.5 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={handleSavePreferences}
                      >
                        Salvar
                      </button>
                    </div>
                    {atualizaError && <p className="text-red-500 text-xs mt-1">{atualizaError}</p>}
                    {atualizaSucesso && <p className="text-green-500 text-xs mt-1">{atualizaSucesso}</p>}
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label htmlFor="relatorio" className="block text-sm font-medium leading-6 text-white">
                      Gerar relatório
                    </label>
                    <div className="mt-2 flex items-center gap-x-3">
                      <button
                        type="button"
                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Clique aqui
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <a
                type="link"
                href="/"
                className="rounded-md bg-[#4e42ac] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Voltar
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
