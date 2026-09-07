import { FaGithub } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

      <div className="container footer-content">

        <div>
          <strong>Caio Pereira Teixeira</strong>

          <p>
            Desenvolvedor Front-end
          </p>
        </div>

        <p>
          © {currentYear} Caio Pereira
        </p>

        <a
          href="https://github.com/caioptt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
               <a 
          href="https://github.com/caioptt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaWhatsapp />
        </a>

      </div>

    </footer>
  )
}