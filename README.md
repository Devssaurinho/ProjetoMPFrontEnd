## 🔧 Instale e rode

Instale o [**GIT**](https://git-scm.com/).

Com o GIT instalado, clone o repositório:

```bash
git clone https://github.com/Devssaurinho/project-mp.git
```

Instale o [**Node.js**](https://nodejs.org/en/) v18.16.0

Para instalar as dependências que o projeto irá precisar, rode:

```bash
npm install
```

Para iniciar o projeto, rode:

```bash
npm start
```
Para verificar se o código está de acordo com o padrão de codificação [**Airbnb Style**](https://airbnb.io/javascript/react/), rode:

```bash
npx eslint src
```

Para usar o [**React Testing Library**](https://testing-library.com/docs/react-testing-library/example-intro) e o [**Jest**](https://jestjs.io/), primeiro crie um arquivo de teste para testar o componente do React e para executar o teste, rode:

```bash
npm test
```
Para verificar a cobertura dos testes também utilize o [**Jest**](https://jestjs.io/), primeiro instale o Jest globalmente:

```bash
npm install -g jest
```

Depois rode o seguinte comando para verificar a cobertura dos testes:

```bash
jest --coverage
```

Para documentar o código com o [**JSDoc**](https://jsdoc.app/), documente o código conforme requerido na documentação da ferramenta e rode:

```bash
npx jsdoc -c jsdoc.config.json
```

### Outras ferramentas utilizadas neste projeto

[**Tailwind**](https://tailwindui.com/) | 
[**React Icons**](https://react-icons.github.io/react-icons/) | 
[**Headless UI**](https://headlessui.com/) | 
[**Heroicons**](https://heroicons.com/)
