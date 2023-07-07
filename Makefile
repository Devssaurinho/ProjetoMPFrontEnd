# Instala as dependências do projeto
install:
	npm install

# Inicia o projeto
start:
	npm start

# Executa os testes
test:
	npm test

# Verifica a cobertura dos testes
coverage:
	jest --coverage

# Executa o ESLint para verificar o padrão de codificação
lint:
	npx eslint src

# Documenta o código com o JSDoc
docs:
	npx jsdoc -c jsdoc.config.json

clean:
    rm -rf node_modules