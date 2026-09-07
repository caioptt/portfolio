import {
  ArrowLeft,
  ExternalLink,
  Github
} from "lucide-react"

import {
  Link,
  useParams
} from "react-router-dom"

import { projects } from "../data/projects"

export function ProjectDetails() {

  const { slug } = useParams()

  const project = projects.find(
    project => project.slug === slug
  )

  if (!project) {
    return (
      <section className="page-section">

        <div className="container">

          <h1>
            Projeto não encontrado
          </h1>

          <Link to="/projetos">
            Voltar
          </Link>

        </div>

      </section>
    )
  }

  return (
    <section className="project-details">

      <div className="container">

        <Link
          to="/projetos"
          className="back-link"
        >
          <ArrowLeft size={18} />
          Projetos
        </Link>

        <div className="project-details-header">

          <div>

            <span className="eyebrow">
              PROJETO
            </span>

            <h1>
              {project.title}
            </h1>

            <p>
              {project.description}
            </p>

          </div>

          <div className="project-details-actions">

            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              <Github size={19} />
              Código
            </a>

            {project.demo && (

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                <ExternalLink size={19} />
                Demo
              </a>

            )}

          </div>

        </div>

        <div className="project-info-grid">

          <article className="info-card">

            <span>
              STACK
            </span>

            <div className="stack-list">

              {project.technologies.map(technology => (
                <span key={technology}>
                  {technology}
                </span>
              ))}

            </div>

          </article>

          <article className="info-card">

            <span>
              PRINCIPAIS PONTOS
            </span>

            <ul>

              {project.highlights.map(highlight => (
                <li key={highlight}>
                  {highlight}
                </li>
              ))}

            </ul>

          </article>

        </div>

        <article className="project-case">

          <span className="eyebrow">
            CASE
          </span>

          <h2>
            Sobre o desenvolvimento
          </h2>

          <p>
            Neste projeto o objetivo foi criar uma solução
            organizada e de fácil manutenção, separando
            responsabilidades entre páginas, componentes,
            serviços e estruturas de dados.
          </p>

          <p>
            A construção priorizou componentização,
            reutilização de código e uma experiência
            consistente para o usuário.
          </p>

        </article>

      </div>

    </section>
  )
}