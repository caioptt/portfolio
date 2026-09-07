import { Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

      <div className="container footer-content">

        <div>
          <strong>Caio Pereira</strong>

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
          <Github />
        </a>

      </div>

    </footer>
  )
}