# Portfólio

Base de portfólio pessoal com React, TypeScript e Vite.

## Como executar

```sh
npm install
npm run dev
```

## Comandos

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: verifica o TypeScript e gera a aplicação em `dist/`.
- `npm run preview`: serve o build localmente após executar o build.
- `npm run lint`: verifica o código com ESLint.

## Estrutura

```text
public/                 Arquivos estáticos servidos diretamente
src/
  assets/               Imagens, fontes e arquivos importados pelo código
  components/           Componentes reutilizáveis e seus estilos
    Header.tsx
    Header.css
  layouts/              Estrutura compartilhada entre páginas
    MainLayout.tsx
  pages/                Páginas e seções do portfólio
    Home.tsx
    Project.tsx
  styles/
    global.css          Estilos globais e variáveis de tema
  App.tsx               Composição da aplicação
  main.tsx              Inicialização do React e importação do CSS global
```

O portfólio usa uma página única: Home reúne a apresentação e a seção Project.
O cabeçalho navega pelas âncoras #inicio e #projetos. MainLayout contém o
cabeçalho e a área principal de conteúdo.

## Onde editar

- Apresentação: `src/pages/Home.tsx`.
- Projetos: `src/pages/Project.tsx`.
- Navegação: `src/components/Header.tsx`.
- Tema e estilos gerais: `src/styles/global.css`.

Os textos iniciais são provisórios e podem ser substituídos pelos seus dados.
Mantenha componentes fora de assets e crie novas pastas conforme a aplicação precisar.
