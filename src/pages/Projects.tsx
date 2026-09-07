import { useMemo, useState } from "react"

import { ProjectCard } from "../components/ProjectCard"
import { projects } from "../data/projects"

export function Projects() {

  const [selectedTechnology, setSelectedTechnology] =
    useState("Todos")

  const technologies = [
    "Todos",
    ...new Set(
      projects.flatMap(project => project.technologies)
    )
  ]

  const filteredProjects = useMemo(() => {

    if (selectedTechnology === "Todos") {
      return projects
    }

    return projects.filter(project =>
      project.technologies.includes(selectedTechnology)
    )

  }, [selectedTechnology])

  return (
    <section className="page-section">

      <div className="container">

        <div className="page-heading">

          <span>PORTFÓLIO</span>

          <h1>
            Projetos
          </h1>

          <p>
            Alguns projetos desenvolvidos durante minha
            evolução como desenvolvedor Front-end.
          </p>

        </div>

        <div className="filters">

          {technologies.map(technology => (

            <button
              key={technology}
              className={
                selectedTechnology === technology
                  ? "filter active"
                  : "filter"
              }
              onClick={() =>
                setSelectedTechnology(technology)
              }
            >
              {technology}
            </button>

          ))}

        </div>

        <div className="projects-grid">

          {filteredProjects.map(project => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  )
}