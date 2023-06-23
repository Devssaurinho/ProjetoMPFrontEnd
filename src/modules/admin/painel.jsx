import React from 'react';

export default function Painel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <form className="m-10">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10">
                <h2 className="text-base font-semibold leading-7 text-white">Painel de administração</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Aqui o administrador pode escolher as preferências
                  que estarão disponíveis para o usuários
                  darem match e gerar o relatório.
                </p>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label htmlFor="preference" className="block text-sm font-medium leading-6 text-white">
                      Adicione ou remova preferências
                    </label>
                    <div className="mt-2 flex items-center">
                      <input
                        id="preference"
                        name="preference"
                        type="text"
                        autoComplete="off"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Digite a preferência"
                      />
                      <div className="px-3 flex gap-x-2">
                        <button
                          type="button"
                          className="px-3 py-1.5 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Adicionar
                        </button>
                        <button
                          type="button"
                          className="px-3 py-1.5 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-3 ">
                    <label htmlFor="preferences" className="block text-sm font-medium leading-6 text-white">
                      Selecione as preferências que ficarão disponíveis para os usuários
                    </label>
                    <div className="mt-2">
                      <select
                        id="preferences"
                        name="preferences"
                        autoComplete="preferences-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>Livros</option>
                        <option>Jogos</option>
                        <option>Waifus</option>
                      </select>
                    </div>
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
              <a href="/" type="link" className="text-sm font-semibold leading-6 text-white">
                Voltar
              </a>
              <button
                type="submit"
                className="rounded-md bg-[#4e42ac] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
