import {
  ArrowUpRight,
} from "lucide-react"
import { FaGithub } from "react-icons/fa"

import { Link } from "react-router-dom"

import type { Project } from "../types/project"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({
  project
}: ProjectCardProps) {

  return (
    <article className="project-card">

      <div className="project-image">
        <img
          src={project.image}
          alt={`Preview do projeto ${project.title}`}
        />
      </div>

      <div className="project-content">

        <div className="project-technologies">
          {project.technologies.slice(0, 4).map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <h3>
          {project.title}
        </h3>

        <p>
          {project.shortDescription}
        </p>

        <div className="project-actions">

          <Link
            to={`/projetos/${project.slug}`}
            className="project-link"
          >
            Ver projeto
            <ArrowUpRight size={18} />
          </Link>

          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>

        </div>

      </div>

    </article>
  )
}