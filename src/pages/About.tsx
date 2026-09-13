import "./About.css"

const skills = [
  "React",
  "Vue.js",
  "Angular",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "REST APIs",
  "Git",
  "Vite",
  "Nest.js",
  "Responsividade",
  "Componentização",
  "Clean Code"
]

export function About() {

  return (
    <section
      id="sobre"
      data-section
      className="page-section"
    >

      <div className="container">

        <div className="about-grid">

          <div className="about-text">

            <p>
              Oi meu nome é Caio Pereira, sou desenvolvedor Front-end há 4 anos, com experiência
              na construção e evolução de produtos digitais, SPAs, criando
              interfaces responsivas, reutilizáveis e integradas a APIs.

              Meu foco está em transformar requisitos em soluções
              claras, performáticas e fáceis de evoluir.
            </p>

          </div>


          <div className="about-photo-wrapper">

            <div className="about-photo">

              <img
                src={`${import.meta.env.BASE_URL}profile/caio.jpg`}
                alt="Caio Pereira"
              />

            </div>

          </div>

        </div>


        <div className="skills-section">

          <span className="eyebrow">
            TECNOLOGIAS & CONCEITOS
          </span>

          <div className="skills-grid">

            {skills.map(skill => (
              <div
                key={skill}
                className="skill-item"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}