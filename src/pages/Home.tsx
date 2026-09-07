import {
  ArrowRight,
} from "lucide-react"
import { FaGithub } from "react-icons/fa"

import { Link } from "react-router-dom"

import { ProjectCard } from "../components/ProjectCard"
import { SectionTitle } from "../components/SectionTitle"
import { projects } from "../data/projects"

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
              Construindo interfaces que unem
              <span> tecnologia, experiência e produto.</span>
            </h1>
            <p>
              Sou Caio Pereira, desenvolvedor Front-end com experiência
              na construção e evolução de produtos digitais, criando
              interfaces responsivas, reutilizáveis e integradas a APIs.

              Meu foco está em transformar requisitos em soluções
              claras, performáticas e fáceis de evoluir.
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
                <FaGithub size={19} />
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

              <span>FrontEndDeveloper.ts</span>

            </div>

            <pre>
              <code>
                {`const developer = {
  name: "Caio Pereira",
  role: "Front-end Developer",

  stack: [
    "React",
    "Angular",
    "TypeScript",
    "Javascript",
    "Vue",
    "Vuetify",
    "API's Rest",
    "HTML",
    "CSS",
    "Git"
  ],

  goal: "build great products"
};`}
              </code>
            </pre>

          </div>

        </div>

      </section>

      <section className="section">

        <div className="container">

          <div className="section-header">

            <SectionTitle
              subtitle="Portfólio"
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