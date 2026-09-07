import {
  ArrowRight,
  Github
} from "lucide-react"

import { Link } from "react-router-dom"

import { ProjectCard } from "../components/ProjectCard"
import { SectionTitle } from "../components/SectionTitle"
import { projects } from "../data/projects"

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Vue.js",
  "HTML",
  "CSS",
  "Vite",
  "Git",
  "REST APIs"
]

export function Home() {

  const featuredProjects = projects.filter(
    project => project.featured
  )

  return (
    <>
      <section className="hero">

        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="container hero-container">

          <div className="hero-content">

            <span className="status">
              <span className="status-dot" />
              Desenvolvedor Front-end
            </span>

            <h1>
              Transformando ideias em
              <span> experiências digitais.</span>
            </h1>

            <p>
              Olá, sou Caio Pereira. Desenvolvedor Front-end
              focado na construção de interfaces modernas,
              responsivas e componentizadas.
            </p>

            <div className="hero-buttons">

              <Link
                to="/projetos"
                className="button button-primary"
              >
                Conhecer projetos
                <ArrowRight size={19} />
              </Link>

              <a
                href="https://github.com/caioptt"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                <Github size={19} />
                GitHub
              </a>

            </div>

          </div>

          <div className="hero-code">

            <div className="terminal-header">

              <div className="terminal-buttons">
                <span />
                <span />
                <span />
              </div>

              <span>developer.ts</span>

            </div>

            <pre>
              <code>
{`const developer = {
  name: "Caio Pereira",
  role: "Front-end Developer",

  stack: [
    "React",
    "TypeScript",
    "Vue"
  ],

  goal: "build great products"
};`}
              </code>
            </pre>

          </div>

        </div>

      </section>

      <section className="technologies-section">

        <div className="container">

          <p className="technologies-label">
            TECNOLOGIAS
          </p>

          <div className="technologies-list">

            {technologies.map(technology => (
              <span key={technology}>
                {technology}
              </span>
            ))}

          </div>

        </div>

      </section>

      <section className="section">

        <div className="container">

          <div className="section-header">

            <SectionTitle
              subtitle="Portfolio"
              title="Projetos em destaque"
            />

            <Link
              to="/projetos"
              className="view-all"
            >
              Todos os projetos
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="projects-grid">

            {featuredProjects.map(project => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}

          </div>

        </div>

      </section>

      <section className="cta-section">

        <div className="container">

          <div className="cta">

            <div>
              <span>CONTATO</span>

              <h2>
                Vamos construir algo interessante?
              </h2>
            </div>

            <Link
              to="/contato"
              className="button button-light"
            >
              Entrar em contato
              <ArrowRight />
            </Link>

          </div>

        </div>

      </section>
    </>
  )
}