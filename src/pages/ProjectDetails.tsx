import "./ProjectDetails.css"
import {
  ArrowLeft,
} from "lucide-react"

import { FaGithub } from "react-icons/fa"

import {
  Link,
  useNavigate,
  useParams
} from "react-router-dom"

import { projects } from "../data/projects"

export function ProjectDetails() {

  const navigate = useNavigate()

  function backToProjects() {
  navigate("/", {
    state: {
      scrollTo: "projetos"
    }
  })
}

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

          <Link to="/Portfolio">
            Voltar
          </Link>

        </div>

      </section>
    )
  }

  return (
    <section className="project-details">

      <div className="container">

        <button
            onClick={backToProjects}
          className="back-link"
        >
          <ArrowLeft size={18} />
          Projetos
        </button>

        <div className="project-details-header">

          <div>

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
              <FaGithub size={19} />
              Código
            </a>

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

          <h2>
            Sobre o desenvolvimento
          </h2>

          <p>
          {project.developmentDescription}
          </p>

        </article>

      </div>

    </section>
  )
}