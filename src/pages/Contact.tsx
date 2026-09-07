import {
  ArrowUpRight,
  Github,
  Mail
} from "lucide-react"

export function Contact() {

  return (
    <section className="page-section contact-page">

      <div className="container">

        <div className="page-heading">

          <span>CONTATO</span>

          <h1>
            Vamos conversar.
          </h1>

          <p>
            Estou aberto a oportunidades, projetos
            e conversas sobre desenvolvimento Front-end.
          </p>

        </div>

        <div className="contact-grid">

          <a
            href="https://github.com/caioptt"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >

            <Github />

            <div>

              <span>
                GitHub
              </span>

              <strong>
                github.com/caioptt
              </strong>

            </div>

            <ArrowUpRight />

          </a>

          <a
            href="mailto:SEU_EMAIL_AQUI"
            className="contact-card"
          >

            <Mail />

            <div>

              <span>
                Email
              </span>

              <strong>
                Entre em contato
              </strong>

            </div>

            <ArrowUpRight />

          </a>

        </div>

      </div>

    </section>
  )
}