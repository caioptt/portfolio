import {
  useEffect,
  useState
} from "react"

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa"

import "./Sidebar.css"

export function Sidebar() {

  const [activeSection, setActiveSection] =
    useState("sobre")

  const menuItems = [
    {
      label: "SOBRE",
      id: "sobre"
    },
    {
      label: "PROJETOS",
      id: "projetos"
    },
    {
      label: "CONTATO",
      id: "contato"
    }
  ]

  useEffect(() => {

    const sections =
      document.querySelectorAll("[data-section]")

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {
              setActiveSection(
                entry.target.id
              )
            }

          })

        },
        {
          rootMargin:
            "-35% 0px -55% 0px",

          threshold: 0
        }
      )

    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }

  }, [])


  function scrollToSection(id: string) {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })

  }


  return (
    <aside className="sidebar">

      <div className="sidebar-content">

        <div className="sidebar-intro">

          <button
            className="sidebar-logo"
            onClick={() =>
              scrollToSection("sobre")
            }
          >
            Caio Pereira
          </button>

          <h2>
          Front-end Developer
          </h2>

          <p>
            Construindo interfaces que unem
            tecnologia, experiência e produto
          </p>

        </div>


        <nav className="sidebar-navigation">

          {menuItems.map(item => (

            <button
              key={item.id}

              onClick={() =>
                scrollToSection(item.id)
              }

              className={
                activeSection === item.id
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >

              <span className="sidebar-line" />

              <span className="sidebar-label">
                {item.label}
              </span>

            </button>

          ))}

        </nav>


        <div className="sidebar-social">

          <a
            href="https://github.com/caioptt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/caiodevpereira/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </aside>
  )
}