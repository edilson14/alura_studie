# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


## Aula 1 - Criando Projeto
- Escolher o template com a flag `template typescript` permite que o projeto seja criado com typescript e não js
   ```
    npx create-react-app nome-do-projeto --template typescript 
  ```

## Aula 2 - Componetização
- DRY (Dont Repeat Your Self) criando componentes sem repitir o código
- SRP (Single Responsability Principle) cada componente deve fazer uma coisa desacoplado

    ### Boas Praticas
    - CamalCase
    - Retornar JSX
- Class Componets e Function components
  - era utilizado classe components para poder atualizar os dados antes da introdução dos hooks 
  - introdução de hooks permitiu que as functions components tivessem status


## Aula 3 - CSS no React
- Inline style não recomendado funciona com duas chaves (notação de objetos )
- React usa className em vez de class
- usar sass no lugar de csss
  - declaração de variaveis
  - sintaxe alinhada
  - dividir as importações e estelização
  - inclusão de mixin
  - documentação e comunidade para suporte

- CSS Modules
  - caso a gente tenha duas classes com o mesmo nome , ele evite que tenha duas classes com o mesmo nome , adicionando uma hash no final


## Aula 4 - Props
- Compartilhando e costumisando componentes de forma diferente
- utilização de key para a renderização do virtual dom
  - não é aconselhado utilizar index do array para evitar re-renderização desnecessaria
  - como explicado nesse [artigo](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/) pode causar varios efeitos