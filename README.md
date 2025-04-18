# Placar da Olimpíada de História Militar e Aeronáutica

Projeto desenvolvido para fornecer uma visualização em tempo real do Placar da Olimpíada e fornecer um ambiente mais competitivo e interessante, tanto aos espectadores quanto para os participantes.

## Histórico do Projeto

O projeto de uma WebApplication foi inciado em 2023, para substituir um sistema em VBA que existia anteriormente. Para isso, com acesso a 0 reais de orçamento, utilizei um banco de dados PocketBase montado por Docker em uma MV em Guarulhos que consegui pela Fly.io. Após isso, montei todo o frontend utilizando React, React Router DOM, Chakra-UI e SASS, o que gerou a página placar Intermediário e placar Final ( Atualmente suas versões de projeção, as quais possui viewport fixado em 1920:1080 para forçar a correta disposição no projetor ), porém tudo rodava apenas em rede local, com porta exposta para visualização do outro na mesa de locução e a própria máquina que executava projetava.
Em 2024, o projeto foi retormado para a X OHMA, para trazer evoluções na nova edição sendo ela comemorativa do 10 anos de olimpíada, foi idealizado a Introdução de um Wbbsite público e a transmissão em simultâneo ao Vivo. Para isso o WebApp teve seu deploy utilizando o AWS Amplify, vinculado ao GitHub do projeto. Também teve de ser cirada um Landing Page para dar acesso aos placares, foi criado mas não tem link na página inicial o placar total, disponível em "/placar".

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
