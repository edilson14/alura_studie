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

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Aula 1 - Criando Projeto
- Escolher o template com a flag `template typescript` permite que o projeto seja criado com typescript e não js
   ```
    npx create-react-app template typescript nome-do-projeto
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