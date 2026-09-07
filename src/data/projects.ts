import type { Project } from "../types/project"

export const projects: Project[] = [

  {
    slug: "teste-tecnico-xtracky",

    title: "Gerenciamento de Usuários",

    shortDescription:
      "Aplicação front-end para gerenciamento de usuários utilizando React, TypeScript e API REST mock.",

    description:
      "Projeto desenvolvido a partir de um desafio técnico Front-end envolvendo organização de código, componentização, gerenciamento de estado e integração com uma API REST mock.",

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

    featured: true,

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
    slug: "ecommerce",

    title: "E-commerce",

    shortDescription:
      "Aplicação de e-commerce desenvolvida com Vue.js e uma arquitetura baseada em componentes reutilizáveis.",

    description:
      "Projeto de comércio eletrônico criado para explorar construção de interfaces, componentes reutilizáveis, navegação e organização de aplicações front-end.",

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
    slug: "aurea-project",

    title: "Aurea Project",

    shortDescription:
      "Projeto desenvolvido em Vue.js explorando construção de interfaces e arquitetura front-end.",

    description:
      "Aplicação desenvolvida utilizando Vue.js como parte da evolução dos meus conhecimentos em desenvolvimento Front-end.",

    technologies: [
      "Vue.js",
      "JavaScript",
      "CSS"
    ],

    repository:
      "https://github.com/caioptt/aurea-project",

    featured: true,

    highlights: [
      "Vue.js",
      "Componentização",
      "Interface web",
      "Organização de código"
    ]
  },
    {
    slug: "portfolio",

    title: "Portfólio Pessoal",

    shortDescription:
      "Portfólio desenvolvido com React e TypeScript para apresentar meus projetos, habilidades e experiências como desenvolvedor Front-end.",

    description:
      "Aplicação SPA desenvolvida com React, TypeScript e Vite para centralizar meus projetos e apresentar minha trajetória profissional. O projeto foi estruturado com foco em componentização, reutilização de código, responsividade e organização de responsabilidades.",

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
  }
]