import "./Contact.css"
import {
  ArrowUpRight,
  Mail
} from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"

export function Contact() {

  return (
    <section id="contato"
      data-section className="page-section contact-page">

      <div className="container">

        <div className="contact-heading">

          <span>CONTATO</span>

          <h1>
            Vamos conversar.
          </h1>

          <p>
            Estou aberto a oportunidades, projetos
            e conversas sobre desenvolvimento.
          </p>

        </div>

        <div className="contact-grid">

          <a
            href="https://github.com/caioptt"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >

            <FaGithub />

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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=caiopereira552@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >

            <Mail />

            <div>

              <span>
                Email
              </span>

              <strong>
                caiopereira552@gmail.com
              </strong>

            </div>

            <ArrowUpRight />

          </a>

          <a
            href="https://www.linkedin.com/in/caiodevpereira/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >

            <FaLinkedin />

            <div>

              <span>
                LinkedIn
              </span>

              <strong>
                Caio Pereira
              </strong>

            </div>

            <ArrowUpRight />

          </a>

          <a
            href="https://wa.me/5531998634183"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >

            <FaWhatsapp />

            <div>

              <span>
                Whatsapp
              </span>

              <strong>
                Caio Pereira
              </strong>

            </div>

            <ArrowUpRight />

          </a>

        </div>

      </div>

    </section>
  )
}