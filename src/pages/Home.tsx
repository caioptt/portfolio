import "./Home.css"
import {
  ArrowRight,
} from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

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

            <h1>
              Caio Pereira
              <span> Front-end Developer</span>
            </h1>
            <p>
              Oi meu nome é Caio Pereira, sou desenvolvedor Front-end há 4 anos, com experiência
              na construção e evolução de produtos digitais, SPAs, criando
              interfaces responsivas, reutilizáveis e integradas a APIs.

              Meu foco está em transformar requisitos em soluções
              claras, performáticas e fáceis de evoluir.
            </p>
            <div className="hero-buttons">

              <a
                 href="https://www.linkedin.com/in/caiodevpereira/"
                className="button button-linkedin"
              >
                <FaLinkedin size={19} />
                Linkedin
              </a>

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

          <div className="hero-photo-wrapper">

            <div className="hero-photo">

              <img
                src="./profile/caio.jpg"
                alt="Caio Pereira"
              />

            </div>

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

          <div className="home-projects-grid">

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
              <h2>
                Vamos construir algo interessante?
              </h2>
            </div>

            <Link
              to="/contato"
              className="button button-secondary"
            >
              Entre em contato
            </Link>

          </div>

        </div>

      </section>
    </>
  )
}