const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Vue.js",
  "HTML",
  "CSS",
  "REST APIs",
  "Git",
  "Vite",
  "Responsividade",
  "Componentização",
  "Clean Code"
]

export function About() {

  return (
    <section className="page-section">

      <div className="container">

        <div className="page-heading">

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

          <div className="about-card">

            <span className="eyebrow">
              MINHA ABORDAGEM
            </span>

            <div className="approach-item">

              <strong>01</strong>

              <div>
                <h3>Entender</h3>
                <p>
                  Compreender problema e requisitos
                </p>
              </div>

            </div>

            <div className="approach-item">

              <strong>02</strong>

              <div>
                <h3>Estruturar</h3>
                <p>
                  Definir componentes e responsabilidades
                </p>
              </div>

            </div>

            <div className="approach-item">

              <strong>03</strong>

              <div>
                <h3>Construir</h3>
                <p>
                  Desenvolver uma solução simples e escalável
                </p>
              </div>

            </div>

            <div className="approach-item">

              <strong>04</strong>

              <div>
                <h3>Refinar</h3>
                <p>
                  Melhorar UX, código e performance
                </p>
              </div>

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