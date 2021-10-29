# OmnixChallenge

## 💻 Sobre o projeto

Desafio técnico da [Omnix Digital Experience](https://omnixperience.com.br/) com a proposta de desenvolver parte de uma landing page com foco na venda de planos de internet, consumindo a API [ViaCep](https://viacep.com.br/) para obter os dados do endereço ao consultar o CEP.

Deploy: https://omnixfiber-gabe.netlify.app/

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/). Após ter instalado as ferramentas básicas, você vai precisar criar e configurar algumas coisas a seguir:

Primeiro abra o seu terminal e rode o seguinte comando para fazer o download do projeto em sua máquina:

```bash
# Clone este repositório
$ git clone https://github.com/gabepinheiro/omnix-challenge

# Acesse a pasta do projeto no terminal/cmd
$ cd omnix-challenge
```

Rode o seguinte comando para instalar todas as dependências necessárias do projeto:

```bash
npm install
# or
yarn install
```

Com tudo pronto, você pode iniciar o aplicativo com:

```bash
npm run dev
# or
yarn dev
```

Abrir [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Você pode começar a editar a página modificando `pages/Home/index.tsx`. A página é atualizada automaticamente conforme você edita o arquivo.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and
- `lint:fix`: runs the linter to fix problems in all components.
- `type-check`: runs the typescript to type check in all components.
- `prepare`: install Husky.

## 🛠 Tecnologias utilizadas.

- [React.js](https://pt-br.reactjs.org/)
- [Styled-components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [Husky](https://github.com/typicode/husky)
