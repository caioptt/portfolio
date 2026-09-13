import type { Project } from "../types/project"

export const projects: Project[] = [

  {
    slug: "portfolio",

    title: "Portfólio Pessoal",

    image: "./projects/portfolio-card.png",

    shortDescription:
      "Portfólio desenvolvido com React e TypeScript para apresentar meus projetos, habilidades e experiências como desenvolvedor Front-end.",

    description:
      "Aplicação SPA desenvolvida com React, TypeScript e Vite para centralizar meus projetos e apresentar minha trajetória profissional. O projeto foi estruturado com foco em componentização, reutilização de código, responsividade e organização de responsabilidades.",
    developmentDescription:
      "Esse site foi desenvolvido como um portfólio pessoal em React com TypeScript, utilizando Vite para a estrutura e build da aplicação. A proposta foi criar uma experiência simples e direta, onde as principais informações ficam organizadas em uma única página com as seções Sobre, Projetos e Contato, utilizando uma sidebar fixa para facilitar a navegação.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "CSS",
      "GitHub Pages"
    ],

    repository:
      "https://github.com/caioptt/portfolio",

    demo:
      "https://caioptt.github.io/portfolio/",

    featured: true,

    highlights: [
      "Arquitetura baseada em componentes reutilizáveis",
      "Navegação SPA com React Router",
      "Tipagem com TypeScript",
      "Dados dos projetos centralizados",
      "Layout responsivo",
      "Filtros de projetos por tecnologia",
      "Rotas dinâmicas para detalhes dos projetos",
      "Deploy no GitHub Pages"
    ]
  },

  {
    slug: "ecommerce",

    title: "E-commerce",

    image: "./projects/e-commerce-card.png",

    shortDescription:
      "Aplicação de e-commerce desenvolvida com Vue.js e uma arquitetura baseada em componentes reutilizáveis.",

    description:
      "Projeto de comércio eletrônico criado para explorar construção de interfaces, componentes reutilizáveis, navegação e organização de aplicações front-end.",
    developmentDescription:
      "O projeto foi desenvolvido como uma aplicação SPA de e-commerce utilizando Vue.js, TypeScript, Vuetify e Vite, com foco na construção de uma interface moderna, responsiva e baseada em componentes reutilizáveis. Durante o desenvolvimento foram trabalhados recursos como exibição de produtos, navegação entre páginas, carrinho, login, cadastro, busca e organização do layout para diferentes dispositivos.",
    technologies: [
      "Vue.js",
      "TypeScript",
      "Vuetify",
      "Vite"
    ],

    repository:
      "https://github.com/caioptt/e-commerce",

    featured: true,

    highlights: [
      "Interface responsiva",
      "Componentização",
      "Página de produtos",
      "Navegação SPA",
      "Experiência de usuário",
      "Organização de componentes"
    ]
  },

  {
    slug: "teste-tecnico-xtracky",

    title: "Gerenciamento de Usuários",

    image: "./projects/teste-tecnico-xtracky.png",

    shortDescription:
      "Aplicação front-end para gerenciamento de usuários utilizando React, TypeScript e API REST mock.",

    description:
      "Projeto desenvolvido a partir de um desafio técnico Front-end envolvendo organização de código, componentização, gerenciamento de estado e integração com uma API REST mock.",
    developmentDescription:
      "O projeto utiliza React, TypeScript e Vite, com uma API mock baseada em json-server e Docker. A proposta é construir uma aplicação de gerenciamento de usuários com recursos de listagem, busca, ordenação, cadastro, edição e visualização de detalhes, além de tratamento de loading, erros e ausência de resultados.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "REST API",
      "Docker",
      "JSON Server"
    ],

    repository:
      "https://github.com/caioptt/teste-tecnico-front-xtracky",

    featured: false,

    highlights: [
      "Listagem de usuários",
      "Busca de usuários",
      "Ordenação de dados",
      "Cadastro e edição",
      "Visualização de detalhes",
      "Tratamento de estados da interface",
      "Integração com API REST mock",
      "Estrutura componentizada"
    ]
  },
  {
    slug: "aurea-project",

    title: "Aurea Project",

    image: "./projects/aurea-project.png",

    shortDescription:
      "Projeto desenvolvido em Vue.js explorando construção de interfaces e arquitetura front-end.",

    description:
      "Aplicação desenvolvida utilizando Vue.js no inicio da evolução dos meus conhecimentos em desenvolvimento Front-end.",
    developmentDescription:
      "O Aurea Project foi desenvolvido como uma aplicação web educacional voltada à apresentação de conteúdos sobre a Lei Áurea, o processo de abolição da escravidão no Brasil e seus desdobramentos históricos e sociais. No desenvolvimento utilizei Vue.js 2, Vue Router e Vuetify, estruturando a aplicação em componentes e rotas independentes. A interface foi construída com recursos como navigation drawer, cards, grid responsivo, imagens e transições entre páginas, buscando facilitar a navegação por um conteúdo extenso sem concentrar todas as informações em uma única tela.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "CSS"
    ],

    repository:
      "https://github.com/caioptt/aurea-project",

    featured: false,

    highlights: [
      "Vue.js",
      "Componentização",
      "Interface web",
      "Organização de código"
    ]
  }
]