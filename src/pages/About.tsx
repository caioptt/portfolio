import "./About.css"
const skills = [
  "React",
  "Vue.js",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Vue.js",
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
    <section className="page-section">

      <div className="container">

        <div className="about-heading">

          <span>SOBRE</span>

          <h1>
            Muito além de escrever componentes.
          </h1>

        </div>

        <div className="about-grid">

          <div className="about-text">

            <p>
              Sou desenvolvedor Front-end com foco na
              construção de interfaces modernas,
              responsivas e reutilizáveis.
            </p>

            <p>
              Gosto de trabalhar entendendo primeiro
              o problema que a interface precisa resolver
              para depois pensar na tecnologia.
            </p>

            <p>
              No desenvolvimento, busco separar
              responsabilidades, criar componentes
              reutilizáveis e manter o código simples
              de entender e evoluir.
            </p>

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